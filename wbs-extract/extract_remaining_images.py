#!/usr/bin/env python3
"""
Extract remaining gallery images from saved HTML files
"""

import os
import re
import json
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_URL = "https://wbs.pl"
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

def download_file(url, output_path):
    """Download file using curl"""
    try:
        subprocess.run(
            ["curl", "-sL", url, "--max-time", "30", "-o", output_path],
            check=True,
            capture_output=True
        )
        return os.path.exists(output_path) and os.path.getsize(output_path) > 100
    except:
        return False

def extract_images_from_article(article_slug):
    """Extract and download all images from a saved article"""
    article_dir = os.path.join(OUTPUT_DIR, "articles", article_slug)
    html_path = os.path.join(article_dir, "article.html")
    images_dir = os.path.join(article_dir, "images")
    
    if not os.path.exists(html_path):
        return 0
    
    with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    # Find all photo URLs
    photo_urls = set()
    
    # Gallery images
    for match in re.findall(r'/pub/cms/photos/[^"\'\s;)]+\.(?:jpg|jpeg|png|gif)', html, re.IGNORECASE):
        if '800x600' not in match:  # Skip thumbnails, get originals
            photo_urls.add(f"{BASE_URL}{match}")
    
    # Inline images
    for match in re.findall(r'src="(/pub/cms/[^"]+\.(?:jpg|jpeg|png|gif))"', html, re.IGNORECASE):
        photo_urls.add(f"{BASE_URL}{match}")
    
    os.makedirs(images_dir, exist_ok=True)
    
    downloaded = 0
    existing = set(os.listdir(images_dir))
    
    for url in photo_urls:
        filename = os.path.basename(url.split('?')[0])
        if filename in existing:
            continue
            
        local_path = os.path.join(images_dir, filename)
        if download_file(url, local_path):
            downloaded += 1
    
    return downloaded

def main():
    print("=== Extracting Remaining Images ===\n")
    
    # Get all article directories
    articles_dir = os.path.join(OUTPUT_DIR, "articles")
    article_slugs = [d for d in os.listdir(articles_dir) 
                     if os.path.isdir(os.path.join(articles_dir, d)) 
                     and not d.endswith('.html')]
    
    print(f"Found {len(article_slugs)} articles to process")
    
    total_downloaded = 0
    
    # Process in parallel with limited workers
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = {executor.submit(extract_images_from_article, slug): slug 
                   for slug in article_slugs}
        
        for i, future in enumerate(as_completed(futures)):
            slug = futures[future]
            try:
                count = future.result()
                total_downloaded += count
                if count > 0:
                    print(f"  {slug}: +{count} images")
                if (i + 1) % 50 == 0:
                    print(f"Progress: {i+1}/{len(article_slugs)} articles processed")
            except Exception as e:
                print(f"  Error processing {slug}: {e}")
    
    print(f"\n=== Downloaded {total_downloaded} new images ===")
    
    # Count total images
    total_images = 0
    for slug in article_slugs:
        img_dir = os.path.join(articles_dir, slug, "images")
        if os.path.exists(img_dir):
            total_images += len([f for f in os.listdir(img_dir) 
                                 if f.endswith(('.jpg', '.jpeg', '.png', '.gif'))])
    
    print(f"Total images across all articles: {total_images}")

if __name__ == "__main__":
    main()
