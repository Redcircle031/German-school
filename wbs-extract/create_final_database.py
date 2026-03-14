#!/usr/bin/env python3
"""
Create final JSON database with all extracted content
"""

import os
import json
import re
from datetime import datetime

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

def extract_seo_data(html):
    """Extract SEO metadata from HTML"""
    seo = {
        "title": "",
        "description": "",
        "keywords": ""
    }
    
    # Title
    title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
    if title_match:
        seo["title"] = title_match.group(1).strip()
    
    # Meta description
    desc_match = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']*)["\']', 
                           html, re.IGNORECASE)
    if desc_match:
        seo["description"] = desc_match.group(1)
    
    # Meta keywords
    kw_match = re.search(r'<meta[^>]+name=["\']keywords["\'][^>]+content=["\']([^"\']*)["\']', 
                         html, re.IGNORECASE)
    if kw_match:
        seo["keywords"] = kw_match.group(1)
    
    return seo

def main():
    print("=== Creating Final Content Database ===\n")
    
    articles_dir = os.path.join(OUTPUT_DIR, "articles")
    article_dirs = [d for d in os.listdir(articles_dir) 
                    if os.path.isdir(os.path.join(articles_dir, d)) 
                    and not d in ['by-year', 'all']]
    
    print(f"Processing {len(article_dirs)} articles...")
    
    database = {
        "metadata": {
            "extractedAt": datetime.now().isoformat(),
            "schoolName": "WBS - Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta w Warszawie",
            "baseUrl": "https://wbs.pl",
            "version": "2.0",
            "totalArticles": 0,
            "totalImages": 0,
            "totalPdfs": 0
        },
        "categories": {
            "news": [],
            "events": [],
            "projects": [],
            "achievements": [],
            "other": []
        },
        "articles": [],
        "images": [],
        "pdfs": [],
        "menuStructure": {
            "main": [
                {"name": "Aktualności", "url": "aktualnosci-1338.html"},
                {"name": "O nas", "url": "o_nas-1397.html"},
                {"name": "Strefa rodzica", "url": "strefa_rodzica-1401.html"},
                {"name": "Strefa ucznia", "url": "strefa_ucznia-2111.html"},
                {"name": "Kontakt", "url": "kontakt-1420.html"}
            ]
        }
    }
    
    for slug in article_dirs:
        article_path = os.path.join(articles_dir, slug)
        html_path = os.path.join(article_path, "article.html")
        metadata_path = os.path.join(article_path, "metadata.json")
        images_dir = os.path.join(article_path, "images")
        pdfs_dir = os.path.join(article_path, "pdfs")
        
        if not os.path.exists(html_path):
            continue
        
        # Read HTML
        with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
            html = f.read()
        
        # Extract basic info
        title_match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL | re.IGNORECASE)
        title = re.sub(r'<[^>]+>', '', title_match.group(1) if title_match else "").strip()
        
        date_match = re.search(r'<i>(\d{4}-\d{2}-\d{2})</i>', html)
        date = date_match.group(1) if date_match else ""
        
        # Get images
        images = []
        if os.path.exists(images_dir):
            for img_file in os.listdir(images_dir):
                if img_file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                    img_path = f"articles/{slug}/images/{img_file}"
                    images.append({
                        "filename": img_file,
                        "path": img_path,
                        "articleSlug": slug
                    })
                    database["images"].append({
                        "articleSlug": slug,
                        "filename": img_file,
                        "path": img_path
                    })
        
        # Get PDFs
        pdfs = []
        if os.path.exists(pdfs_dir):
            for pdf_file in os.listdir(pdfs_dir):
                if pdf_file.lower().endswith('.pdf'):
                    pdf_path = f"articles/{slug}/pdfs/{pdf_file}"
                    pdfs.append({
                        "filename": pdf_file,
                        "path": pdf_path,
                        "articleSlug": slug
                    })
                    database["pdfs"].append({
                        "articleSlug": slug,
                        "filename": pdf_file,
                        "path": pdf_path
                    })
        
        # Extract content
        content = ""
        content_match = re.search(r'<h1.*?</h1>(.*?)(?:<footer|<aside|<complementary)', 
                                  html, re.DOTALL | re.IGNORECASE)
        if content_match:
            content = content_match.group(1)
            content = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
            content = re.sub(r'<style.*?</style>', '', content, flags=re.DOTALL | re.IGNORECASE)
        
        # Extract excerpt (first paragraph)
        excerpt = ""
        p_match = re.search(r'<p[^>]*>([^<]+)</p>', content, re.IGNORECASE)
        if p_match:
            excerpt = p_match.group(1).strip()[:300]
        
        # Determine category
        category = "other"
        title_lower = title.lower()
        if any(word in title_lower for word in ['konkurs', 'sukces', 'wygrana', 'mistrzostwa', 'zwycięstwo', 'olimpiada']):
            category = "achievements"
        elif any(word in title_lower for word in ['koncert', 'występ', 'festyn', 'spotkanie', 'wydarzenie', 'wycieczka', 'projekt']):
            category = "events"
        elif any(word in title_lower for word in ['informacja', 'ogłoszenie', 'ważne', 'komunikat']):
            category = "news"
        
        article = {
            "id": slug,
            "slug": slug,
            "title": title,
            "date": date,
            "category": category,
            "excerpt": excerpt,
            "content": content[:5000] if len(content) > 5000 else content,  # Truncate for JSON size
            "seo": extract_seo_data(html),
            "imageCount": len(images),
            "pdfCount": len(pdfs),
            "images": images,
            "pdfs": pdfs,
            "paths": {
                "html": f"articles/{slug}/article.html",
                "images": f"articles/{slug}/images",
                "pdfs": f"articles/{slug}/pdfs"
            },
            "originalUrl": f"https://wbs.pl/{slug}.html"
        }
        
        database["articles"].append(article)
        database["categories"][category].append(slug)
        
        database["metadata"]["totalArticles"] += 1
        database["metadata"]["totalImages"] += len(images)
        database["metadata"]["totalPdfs"] += len(pdfs)
    
    # Sort articles by date (newest first)
    database["articles"].sort(key=lambda x: x["date"] if x["date"] else "", reverse=True)
    
    # Save database
    db_path = os.path.join(OUTPUT_DIR, "wbs-complete-database.json")
    with open(db_path, 'w', encoding='utf-8') as f:
        json.dump(database, f, indent=2, ensure_ascii=False)
    
    # Also save a smaller metadata-only version for quick loading
    metadata_db = {
        "metadata": database["metadata"],
        "articles": [{"id": a["id"], "title": a["title"], "date": a["date"], 
                      "category": a["category"], "excerpt": a["excerpt"],
                      "imageCount": a["imageCount"], "pdfCount": a["pdfCount"]} 
                     for a in database["articles"]]
    }
    
    meta_path = os.path.join(OUTPUT_DIR, "wbs-articles-metadata.json")
    with open(meta_path, 'w', encoding='utf-8') as f:
        json.dump(metadata_db, f, indent=2, ensure_ascii=False)
    
    print(f"\n=== Database Created ===")
    print(f"Total Articles: {database['metadata']['totalArticles']}")
    print(f"Total Images: {database['metadata']['totalImages']}")
    print(f"Total PDFs: {database['metadata']['totalPdfs']}")
    print(f"\nFiles created:")
    print(f"  - {db_path}")
    print(f"  - {meta_path}")
    
    # Print category breakdown
    print(f"\nCategory Breakdown:")
    for cat, articles in database["categories"].items():
        print(f"  {cat}: {len(articles)} articles")

if __name__ == "__main__":
    main()
