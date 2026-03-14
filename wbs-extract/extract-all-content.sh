#!/bin/bash
# WBS Complete Content Extraction Script
# Extracts ALL articles, images, and content

set -e

BASE_URL="https://wbs.pl"
OUTPUT_DIR="$(pwd)"

echo "=== WBS Complete Content Extraction ==="
echo "Output directory: $OUTPUT_DIR"
echo ""

# Create directories
mkdir -p articles/{by-year,all}
mkdir -p images/{articles,galleries,thumbnails}
mkdir -p pdfs
mkdir -p content-export

# Initialize counters
TOTAL_ARTICLES=0
TOTAL_IMAGES=0
TOTAL_PDFS=0

# Function to extract article URLs from a page
extract_articles() {
    local url=$1
    curl -sL "$url" --max-time 30 2>/dev/null | \
        grep -oE 'href="[^"]+-[0-9]+\.html"' | \
        grep -vE '(aktualnosci|aktuelles|strona_glowna|mapa_strony|o_nas|szkola|zespol|misja|dokumenty|organ_prowadzacy|strefa_|regulamin|formularze|impressum|kontakt|rekrutacja|biblioteka|projekty|stolowka|opieka|rada_rodzicow|plan_ferii|dzwonki|chor_|karta_|elegitymacja|mlegitymacja|akademia|nauczyciel|samorzad|nasze_|nasi_|nasze_certyfikaty|oferty_pracy)' | \
        sed 's/href="//;s/"$//' | \
        sort -u
}

# Function to download and process an article
process_article() {
    local article_path=$1
    local article_url="${BASE_URL}/${article_path}"
    local slug=$(echo "$article_path" | sed 's/.html$//;s/[^a-zA-Z0-9_-]/_/g')
    
    echo "Processing: $article_path"
    
    # Create article directory
    local article_dir="articles/all/${slug}"
    mkdir -p "$article_dir"
    
    # Download article HTML
    local html_file="$article_dir/article.html"
    if ! curl -sL "$article_url" --max-time 30 -o "$html_file" 2>/dev/null; then
        echo "  ✗ Failed to download"
        return 1
    fi
    
    # Check if valid HTML
    if [ ! -s "$html_file" ]; then
        echo "  ✗ Empty file"
        return 1
    fi
    
    # Extract title
    local title=$(grep -oP '<h1[^>]*>\K[^<]+' "$html_file" | head -1 | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    if [ -z "$title" ]; then
        title=$(grep -oP 'title="\K[^"]+' "$html_file" | grep -v 'WBS Szkoła' | head -1)
    fi
    echo "  Title: ${title:0:60}..."
    
    # Extract date
    local date=$(grep -oP '<i>\K[0-9]{4}-[0-9]{2}-[0-9]{2}' "$html_file" | head -1)
    if [ -z "$date" ]; then
        date=$(grep -oP '[0-9]{4}-[0-9]{2}-[0-9]{2}' "$html_file" | head -1)
    fi
    echo "  Date: $date"
    
    # Extract and download images
    local img_count=0
    local img_dir="$article_dir/images"
    mkdir -p "$img_dir"
    
    # Find all image URLs
    grep -oE 'src="(/pub/cms/photos/[^"]+)"' "$html_file" | \
        sed 's/src="//;s/"$//' | \
        sort -u | \
        while read img_path; do
            local img_url="${BASE_URL}${img_path}"
            local img_name=$(basename "$img_path")
            local img_ext="${img_name##*.}"
            local img_num=$(printf "%03d" $img_count)
            local local_img="$img_dir/image_${img_num}.${img_ext}"
            
            if curl -sL "$img_url" --max-time 30 -o "$local_img" 2>/dev/null; then
                if [ -s "$local_img" ]; then
                    echo "    ✓ Image: $img_name"
                    img_count=$((img_count + 1))
                else
                    rm -f "$local_img"
                fi
            fi
        done
    
    # Also extract gallery images (linked images)
    grep -oE 'href="(/pub/cms/photos/[^"]+\.(jpg|jpeg|png|gif))"' "$html_file" | \
        sed 's/href="//;s/"$//' | \
        sort -u | \
        while read img_path; do
            local img_url="${BASE_URL}${img_path}"
            local img_name=$(basename "$img_path")
            local local_img="$img_dir/gallery_${img_name}"
            
            if [ ! -f "$local_img" ]; then
                if curl -sL "$img_url" --max-time 30 -o "$local_img" 2>/dev/null; then
                    if [ -s "$local_img" ]; then
                        echo "    ✓ Gallery: $img_name"
                    else
                        rm -f "$local_img"
                    fi
                fi
            fi
        done
    
    # Count actual images
    local actual_img_count=$(ls -1 "$img_dir" 2>/dev/null | wc -l)
    echo "  Images: $actual_img_count"
    TOTAL_IMAGES=$((TOTAL_IMAGES + actual_img_count))
    
    # Extract and download PDFs
    local pdf_dir="$article_dir/pdfs"
    mkdir -p "$pdf_dir"
    
    grep -oE 'href="(/pub/cms/files/[^"]+\.pdf)"' "$html_file" | \
        sed 's/href="//;s/"$//' | \
        sort -u | \
        while read pdf_path; do
            local pdf_url="${BASE_URL}${pdf_path}"
            local pdf_name=$(basename "$pdf_path")
            local local_pdf="$pdf_dir/$pdf_name"
            
            if [ ! -f "$local_pdf" ]; then
                if curl -sL "$pdf_url" --max-time 30 -o "$local_pdf" 2>/dev/null; then
                    if [ -s "$local_pdf" ] && [ $(stat -f%z "$local_pdf" 2>/dev/null || stat -c%s "$local_pdf" 2>/dev/null || echo 0) -gt 1000 ]; then
                        echo "    ✓ PDF: $pdf_name"
                        # Also copy to main pdfs folder
                        cp "$local_pdf" "pdfs/$pdf_name" 2>/dev/null || true
                    else
                        rm -f "$local_pdf"
                    fi
                fi
            fi
        done
    
    local pdf_count=$(ls -1 "$pdf_dir" 2>/dev/null | wc -l)
    echo "  PDFs: $pdf_count"
    TOTAL_PDFS=$((TOTAL_PDFS + pdf_count))
    
    # Create JSON metadata
    cat > "$article_dir/metadata.json" << EOJSON
{
  "slug": "$slug",
  "url": "$article_url",
  "title": "${title//"/\\"}",
  "date": "$date",
  "imageCount": $actual_img_count,
  "pdfCount": $pdf_count,
  "imagesPath": "images/articles/$slug",
  "pdfsPath": "pdfs"
}
EOJSON
    
    TOTAL_ARTICLES=$((TOTAL_ARTICLES + 1))
    return 0
}

# Get articles from main news page
echo "=== Fetching current articles ==="
MAIN_ARTICLES=$(extract_articles "${BASE_URL}/aktualne_wydarzenia-1339.html")
echo "Found $(echo "$MAIN_ARTICLES" | wc -l) current articles"

# Process main articles
for article in $MAIN_ARTICLES; do
    if [[ "$article" =~ ^[a-zA-Z0-9_]+-[0-9]+\.html$ ]]; then
        process_article "$article" || true
        sleep 0.2
    fi
done

# Archive years to process
ARCHIVE_YEARS=(
    "20202021-4077"
    "20192020-3707"
    "20182019-3301"
    "20172018-2815"
    "20162017-2669"
    "20152016-2368"
    "20142015-2153"
    "20132014-2152"
)

# Process each archive year
for year_id in "${ARCHIVE_YEARS[@]}"; do
    echo ""
    echo "=== Processing archive: $year_id ==="
    
    year_url="${BASE_URL}/${year_id}.html"
    year_articles=$(extract_articles "$year_url")
    
    echo "Found $(echo "$year_articles" | wc -l) articles in $year_id"
    
    for article in $year_articles; do
        if [[ "$article" =~ ^[a-zA-Z0-9_]+-[0-9]+\.html$ ]]; then
            process_article "$article" || true
            sleep 0.2
        fi
    done
done

# Create summary
echo ""
echo "=== Extraction Complete ==="
echo "Total Articles: $TOTAL_ARTICLES"
echo "Total Images: $TOTAL_IMAGES"
echo "Total PDFs: $TOTAL_PDFS"

# Create final JSON database
cat > content-export/wbs-content-database.json << EOJSON
{
  "metadata": {
    "extractedAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "schoolName": "WBS - Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta",
    "baseUrl": "$BASE_URL",
    "totalArticles": $TOTAL_ARTICLES,
    "totalImages": $TOTAL_IMAGES,
    "totalPdfs": $TOTAL_PDFS
  },
  "articles": [
EOJSON

# Add all articles to JSON
first=true
for meta_file in articles/all/*/metadata.json; do
    if [ -f "$meta_file" ]; then
        if [ "$first" = true ]; then
            first=false
        else
            echo "," >> content-export/wbs-content-database.json
        fi
        cat "$meta_file" >> content-export/wbs-content-database.json
    fi
done

echo "" >> content-export/wbs-content-database.json
echo "  ]" >> content-export/wbs-content-database.json
echo "}" >> content-export/wbs-content-database.json

echo ""
echo "Database saved to: content-export/wbs-content-database.json"
