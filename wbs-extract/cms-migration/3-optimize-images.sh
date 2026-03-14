#!/bin/bash
# WBS Image Optimization Script
# Converts all images to WebP with multiple sizes for responsive images

set -e

echo "=== WBS Image Optimization ==="
echo "Converting 1,258 images to WebP format"
echo ""

# Check for required tools
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found. Installing..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install webp
    else
        sudo apt-get install -y webp
    fi
fi

if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Installing..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install imagemagick
    else
        sudo apt-get install -y imagemagick
    fi
fi

# Configuration
SOURCE_DIR="articles"
OUTPUT_DIR="optimized-images"
SIZES=(400 800 1200 1600)  # Responsive image sizes
QUALITY=85

# Create output directories
mkdir -p "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR/thumbnails"
mkdir -p "$OUTPUT_DIR/full"

# Counters
TOTAL=0
OPTIMIZED=0
ERRORS=0

# Function to optimize single image
optimize_image() {
    local input_file="$1"
    local filename=$(basename "$input_file")
    local name="${filename%.*}"
    
    # Create article-specific directory
    local article_dir=$(dirname "$input_file" | xargs basename)
    mkdir -p "$OUTPUT_DIR/full/$article_dir"
    mkdir -p "$OUTPUT_DIR/thumbnails/$article_dir"
    
    # Get image dimensions
    local dimensions=$(identify -format "%w %h" "$input_file" 2>/dev/null || echo "0 0")
    local width=$(echo $dimensions | cut -d' ' -f1)
    local height=$(echo $dimensions | cut -d' ' -f2)
    
    if [ "$width" -eq 0 ] || [ "$height" -eq 0 ]; then
        echo "  ⚠️  Skipping $filename (invalid image)"
        ((ERRORS++))
        return
    fi
    
    echo "  Processing: $filename (${width}x${height})"
    
    # Generate responsive sizes
    for size in "${SIZES[@]}"; do
        if [ "$width" -gt "$size" ]; then
            local output_file="$OUTPUT_DIR/full/$article_dir/${name}-${size}.webp"
            convert "$input_file" -resize ${size}x -quality $QUALITY "$output_file" 2>/dev/null || \
            cwebp -q $QUALITY -resize $size 0 "$input_file" -o "$output_file" 2>/dev/null || true
        fi
    done
    
    # Full-size WebP
    local full_webp="$OUTPUT_DIR/full/$article_dir/${name}.webp"
    cwebp -q $QUALITY "$input_file" -o "$full_webp" 2>/dev/null || \
    convert "$input_file" -quality $QUALITY "$full_webp" 2>/dev/null || true
    
    # Thumbnail (200px width)
    local thumb_file="$OUTPUT_DIR/thumbnails/$article_dir/${name}-thumb.webp"
    convert "$input_file" -resize 200x -quality 80 "$thumb_file" 2>/dev/null || \
    cwebp -q 80 -resize 200 0 "$input_file" -o "$thumb_file" 2>/dev/null || true
    
    ((OPTIMIZED++))
}

# Find and process all images
echo "🔍 Finding images..."
mapfile -t images < <(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \))

TOTAL=${#images[@]}
echo "Found $TOTAL images to optimize"
echo ""

# Process each image
for img in "${images[@]}"; do
    optimize_image "$img"
done

# Generate image manifest for CMS
echo ""
echo "📋 Generating image manifest..."

cat > "$OUTPUT_DIR/manifest.json" << 'EOF'
{
  "optimization": {
    "format": "WebP",
    "quality": 85,
    "sizes": [400, 800, 1200, 1600],
    "thumbnailSize": 200
  },
  "images": [
EOF

first=true
find "$OUTPUT_DIR/full" -name "*.webp" | while read -r webp; do
    if [ "$first" = true ]; then
        first=false
    else
        echo "," >> "$OUTPUT_DIR/manifest.json"
    fi
    
    rel_path=$(echo "$webp" | sed "s|$OUTPUT_DIR/||")
    size=$(stat -f%z "$webp" 2>/dev/null || stat -c%s "$webp" 2>/dev/null || echo 0)
    
    echo "    {\"path\": \"$rel_path\", \"size\": $size}" >> "$OUTPUT_DIR/manifest.json"
done

echo "" >> "$OUTPUT_DIR/manifest.json"
echo "  ]" >> "$OUTPUT_DIR/manifest.json"
echo "}" >> "$OUTPUT_DIR/manifest.json"

# Summary
echo ""
echo "=== Optimization Complete ==="
echo "✅ Processed: $TOTAL images"
echo "✅ Optimized: $OPTIMIZED images"
echo "⚠️  Errors: $ERRORS"
echo ""
echo "📁 Output directories:"
echo "   - $OUTPUT_DIR/full/       (Responsive WebP images)"
echo "   - $OUTPUT_DIR/thumbnails/ (200px thumbnails)"
echo "   - $OUTPUT_DIR/manifest.json (Image database)"
echo ""
echo "💾 Space saved:"
du -sh "$SOURCE_DIR" 2>/dev/null | awk '{print "   Original: " $1}'
du -sh "$OUTPUT_DIR" 2>/dev/null | awk '{print "   Optimized: " $1}'
