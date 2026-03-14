#!/usr/bin/env python3
"""
WBS Complete Content Extractor
Extracts ALL articles, images, and content with full metadata
"""

import os
import re
import json
import subprocess
import time
from urllib.parse import urljoin, urlparse
from datetime import datetime

BASE_URL = "https://wbs.pl"
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

# Track extracted content
content_db = {
    "metadata": {
        "extractedAt": datetime.now().isoformat(),
        "schoolName": "WBS - Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta",
        "baseUrl": BASE_URL,
    },
    "articles": [],
    "images": [],
    "pdfs": [],
    "stats": {"articles": 0, "images": 0, "pdfs": 0}
}

downloaded_images = set()
downloaded_pdfs = set()
processed_articles = set()

def fetch_url(url):
    """Fetch URL content using curl"""
    try:
        result = subprocess.run(
            ["curl", "-sL", url, "--max-time", "30"],
            capture_output=True,
            text=True
        )
        return result.stdout
    except Exception as e:
        print(f"  Error fetching {url}: {e}")
        return None

def download_file(url, output_path):
    """Download file using curl"""
    try:
        subprocess.run(
            ["curl", "-sL", url, "--max-time", "30", "-o", output_path],
            check=True,
            capture_output=True
        )
        return os.path.exists(output_path) and os.path.getsize(output_path) > 0
    except:
        return False

def extract_article_links(html):
    """Extract article URLs from listing page"""
    links = []
    # Match article links with pattern: text-number.html
    pattern = r'href="([^"]*[a-zA-Z0-9_]+-\d+\.html)"[^>]*title="([^"]*)"[^>]*class="news-list"'
    matches = re.findall(pattern, html)
    
    for href, title in matches:
        if href.startswith('/'):
            url = f"{BASE_URL}{href}"
        elif not href.startswith('http'):
            url = f"{BASE_URL}/{href}"
        else:
            url = href
        
        links.append({"url": url, "title": title, "path": href.lstrip('/')})
    
    return links

def extract_images_from_html(html, base_url):
    """Extract all image URLs from HTML"""
    images = []
    
    # Inline images
    img_pattern = r'<img[^>]+src="([^"]+)"[^>]*>'
    for match in re.findall(img_pattern, html, re.IGNORECASE):
        url = urljoin(base_url, match)
        if url.startswith('/'):
            url = f"{BASE_URL}{url}"
        images.append({"url": url, "type": "inline"})
    
    # Gallery images (linked)
    gallery_pattern = r'<a[^>]+href="(/pub/cms/photos/[^"]+\.(?:jpg|jpeg|png|gif))"[^>]*>'
    for match in re.findall(gallery_pattern, html, re.IGNORECASE):
        url = f"{BASE_URL}{match}"
        images.append({"url": url, "type": "gallery"})
    
    return images

def extract_pdfs_from_html(html):
    """Extract PDF links from HTML"""
    pdfs = []
    pattern = r'<a[^>]+href="(/pub/cms/files/[^"]+\.pdf)"[^>]*>([^<]*)</a>'
    for match in re.findall(pattern, html, re.IGNORECASE):
        url = f"{BASE_URL}{match[0]}"
        title = re.sub(r'<[^>]+>', '', match[1]).strip()
        pdfs.append({"url": url, "title": title})
    
    return pdfs

def extract_content(html):
    """Extract main content from article HTML"""
    # Try to find main content area
    content_match = re.search(r'<div[^>]*class="[^"]*(?:main|content)[^"]*"[^>]*>(.*?)</div>', 
                               html, re.DOTALL | re.IGNORECASE)
    
    if content_match:
        content = content_match.group(1)
    else:
        # Fallback - extract between h1 and footer/complementary
        content = re.sub(r'^.*?<h1.*?</h1>', '', html, flags=re.DOTALL | re.IGNORECASE)
        content = re.sub(r'<(footer|complementary|aside).*', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Clean content
    content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    return content.strip()

def process_article(article_info):
    """Process a single article"""
    url = article_info["url"]
    path = article_info["path"]
    
    # Create slug
    slug = re.sub(r'[^a-zA-Z0-9_-]', '_', path.replace('.html', ''))
    
    if slug in processed_articles:
        return None
    processed_articles.add(slug)
    
    print(f"\nProcessing: {path}")
    
    # Fetch article
    html = fetch_url(url)
    if not html:
        print("  ✗ Failed to fetch")
        return None
    
    # Extract title
    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL | re.IGNORECASE)
    title = re.sub(r'<[^>]+>', '', title_match.group(1) if title_match else article_info.get("title", "")).strip()
    
    # Extract date
    date_match = re.search(r'<i>(\d{4}-\d{2}-\d{2})</i>', html)
    date = date_match.group(1) if date_match else ""
    
    print(f"  Title: {title[:70]}...")
    print(f"  Date: {date}")
    
    # Create article directory
    article_dir = os.path.join(OUTPUT_DIR, "articles", slug)
    os.makedirs(article_dir, exist_ok=True)
    os.makedirs(os.path.join(article_dir, "images"), exist_ok=True)
    os.makedirs(os.path.join(article_dir, "pdfs"), exist_ok=True)
    
    # Save HTML
    with open(os.path.join(article_dir, "article.html"), "w", encoding="utf-8") as f:
        f.write(html)
    
    # Extract and download images
    images = extract_images_from_html(html, url)
    article_images = []
    
    for i, img in enumerate(images):
        if img["url"] in downloaded_images:
            continue
        
        ext = os.path.splitext(urlparse(img["url"]).path)[1] or ".jpg"
        filename = f"image_{i:03d}{ext}"
        local_path = os.path.join(article_dir, "images", filename)
        
        if download_file(img["url"], local_path):
            downloaded_images.add(img["url"])
            article_images.append({
                "originalUrl": img["url"],
                "localPath": f"articles/{slug}/images/{filename}",
                "type": img["type"]
            })
            content_db["images"].append({
                "articleSlug": slug,
                "originalUrl": img["url"],
                "localPath": f"articles/{slug}/images/{filename}"
            })
    
    print(f"  Images: {len(article_images)}")
    content_db["stats"]["images"] += len(article_images)
    
    # Extract and download PDFs
    pdfs = extract_pdfs_from_html(html)
    article_pdfs = []
    
    for pdf in pdfs:
        if pdf["url"] in downloaded_pdfs:
            continue
        
        filename = os.path.basename(urlparse(pdf["url"]).path)
        local_path = os.path.join(article_dir, "pdfs", filename)
        main_pdf_path = os.path.join(OUTPUT_DIR, "pdfs", filename)
        
        if download_file(pdf["url"], local_path):
            downloaded_pdfs.add(pdf["url"])
            article_pdfs.append({
                "originalUrl": pdf["url"],
                "localPath": f"articles/{slug}/pdfs/{filename}",
                "title": pdf["title"]
            })
            content_db["pdfs"].append({
                "articleSlug": slug,
                "originalUrl": pdf["url"],
                "localPath": f"pdfs/{filename}",
                "title": pdf["title"]
            })
            # Also copy to main pdfs folder
            os.makedirs(os.path.dirname(main_pdf_path), exist_ok=True)
            if not os.path.exists(main_pdf_path):
                download_file(pdf["url"], main_pdf_path)
    
    print(f"  PDFs: {len(article_pdfs)}")
    content_db["stats"]["pdfs"] += len(article_pdfs)
    
    # Create article object
    article = {
        "slug": slug,
        "url": url,
        "title": title,
        "date": date,
        "content": extract_content(html),
        "excerpt": article_info.get("title", "")[:200],
        "images": article_images,
        "pdfs": article_pdfs,
        "seo": {
            "metaDescription": "",
            "metaKeywords": ""
        },
        "paths": {
            "html": f"articles/{slug}/article.html",
            "images": f"articles/{slug}/images",
            "pdfs": f"articles/{slug}/pdfs"
        }
    }
    
    content_db["articles"].append(article)
    content_db["stats"]["articles"] += 1
    
    # Save article metadata
    with open(os.path.join(article_dir, "metadata.json"), "w", encoding="utf-8") as f:
        json.dump(article, f, indent=2, ensure_ascii=False)
    
    return article

def process_archive_year(year_id):
    """Process all articles from an archive year"""
    url = f"{BASE_URL}/{year_id}.html"
    print(f"\n{'='*60}")
    print(f"Processing Archive: {year_id}")
    print(f"{'='*60}")
    
    html = fetch_url(url)
    if not html:
        print(f"  ✗ Failed to fetch archive page")
        return
    
    articles = extract_article_links(html)
    print(f"  Found {len(articles)} articles")
    
    # Check for pagination
    page_matches = re.findall(r'\?s=(\d+)', html)
    max_page = max([int(p) for p in page_matches]) if page_matches else 0
    
    print(f"  Pages to process: {max_page + 1}")
    
    # Process all pages
    for page in range(max_page + 1):
        page_url = url if page == 0 else f"{url}?s={page}"
        
        if page > 0:
            page_html = fetch_url(page_url)
            if page_html:
                articles = extract_article_links(page_html)
            else:
                continue
        
        for article in articles:
            process_article(article)
            time.sleep(0.2)  # Be nice to server

def main():
    print("="*60)
    print("WBS Complete Content Extraction")
    print("="*60)
    
    # Create directories
    os.makedirs(os.path.join(OUTPUT_DIR, "articles"), exist_ok=True)
    os.makedirs(os.path.join(OUTPUT_DIR, "pdfs"), exist_ok=True)
    os.makedirs(os.path.join(OUTPUT_DIR, "content-export"), exist_ok=True)
    
    # Process current articles
    print("\n" + "="*60)
    print("Processing Current Articles")
    print("="*60)
    
    current_html = fetch_url(f"{BASE_URL}/aktualne_wydarzenia-1339.html")
    if current_html:
        current_articles = extract_article_links(current_html)
        print(f"Found {len(current_articles)} current articles")
        
        for article in current_articles[:30]:  # Process first 30
            process_article(article)
            time.sleep(0.2)
    
    # Process archive years
    archive_years = [
        "20202021-4077",
        "20192020-3707",
        "20182019-3301",
        "20172018-2815",
        "20162017-2669",
        "20152016-2368",
        "20142015-2153",
        "20132014-2152",
    ]
    
    for year_id in archive_years:
        process_archive_year(year_id)
    
    # Save complete database
    content_db["metadata"]["totalArticles"] = content_db["stats"]["articles"]
    content_db["metadata"]["totalImages"] = content_db["stats"]["images"]
    content_db["metadata"]["totalPdfs"] = content_db["stats"]["pdfs"]
    
    db_path = os.path.join(OUTPUT_DIR, "content-export", "wbs-content-database.json")
    with open(db_path, "w", encoding="utf-8") as f:
        json.dump(content_db, f, indent=2, ensure_ascii=False)
    
    # Summary
    print("\n" + "="*60)
    print("EXTRACTION COMPLETE")
    print("="*60)
    print(f"Total Articles: {content_db['stats']['articles']}")
    print(f"Total Images: {content_db['stats']['images']}")
    print(f"Total PDFs: {content_db['stats']['pdfs']}")
    print(f"\nDatabase saved to: {db_path}")

if __name__ == "__main__":
    main()
