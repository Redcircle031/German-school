# 🎯 WBS WEBSITE - COMPREHENSIVE MASTER TASK LIST

**Generated:** 2026-03-13  
**Status:** Migration Complete - Design & Content Enhancement Phase  
**Priority:** Critical → High → Medium → Low

---

## 📊 EXECUTIVE SUMMARY

### What's Complete ✅
- ✅ Content migration (1,305 images, 203 articles, 37 PDFs)
- ✅ Homepage with testimonials
- ✅ News page with article listing
- ✅ Students & Parents pages
- ✅ Sitemap (213 URLs)
- ✅ Redirects (407 redirects)
- ✅ Basic design system

### What's Missing ⚠️
Based on review of all planning documents, here's what still needs work:

---

## 🔴 CRITICAL PRIORITY (Do First)

### 1. Missing Visible Articles on Homepage
**Problem:** Homepage doesn't show actual news articles  
**Location:** `src/app/[locale]/page.tsx`  
**Fix Required:**
```tsx
// Add News Section to homepage (after Values, before CTA)
<section>
  <h2>Aktualności</h2>
  <NewsGrid limit={3} />  // Show 3 latest articles
  <Link href="/pl/news">Zobacz wszystkie →</Link>
</section>
```

### 2. Missing Events Section on Homepage
**Problem:** No upcoming events visible on homepage  
**Location:** `src/app/[locale]/page.tsx`  
**Fix Required:**
```tsx
// Add Events Section (after News)
<section>
  <h2>Nadchodzące wydarzenia</h2>
  <EventList limit={3} />  // Show 3 upcoming events
  <Link href="/pl/events">Zobacz kalendarz →</Link>
</section>
```

### 3. Missing Programs/Academies Section on Homepage
**Problem:** Design brief requires Programs section, currently missing  
**Location:** `src/app/[locale]/page.tsx`  
**Fix Required:**
```tsx
// Add Programs Section (after Events)
<section>
  <h2>Nasze programy</h2>
  <ProgramCards items={['football', 'music', 'library', 'choir']} />
</section>
```

### 4. Image Placeholders Everywhere
**Problem:** All images are placeholders  
**Files Affected:** All page components  
**Fix Required:**
- Replace with real school photos from `/wbs-extract/images/`
- Hero section needs real student/campus photos
- About section needs building photos
- Values section needs activity photos

### 5. Mega Menu Not Fully Functional
**Problem:** Mega menu exists but missing features from design  
**Location:** `src/components/layout/MegaMenu/`  
**Missing Features:**
- [ ] Search integration
- [ ] Featured news cards in menu
- [ ] Quick action buttons (Recruitment, Portals)
- [ ] Mobile accordion animations

---

## 🟠 HIGH PRIORITY (Do Second)

### 6. Missing Homepage Sections (Design Brief Requirements)

**Design Brief Section 1.3 requires these 10 sections:**

| # | Section | Status | Priority |
|---|---------|--------|----------|
| 1 | Hero | ✅ Done | - |
| 2 | Quick Links Bar | ✅ Done | - |
| 3 | About Intro | ✅ Done | - |
| 4 | **News & Announcements** | ❌ Missing | 🔴 |
| 5 | **Upcoming Events** | ❌ Missing | 🔴 |
| 6 | **Programs & Academies** | ❌ Missing | 🔴 |
| 7 | Why Choose WBS | ⚠️ Partial | 🟠 |
| 8 | Testimonials | ✅ Done | - |
| 9 | CTA | ✅ Done | - |
| 10 | Footer | ✅ Done | - |

### 7. About Page Enhancements
**Location:** `src/app/[locale]/about/page.tsx`  
**Missing:**
- [ ] Timeline visualization for school history
- [ ] Video testimonial section
- [ ] More visual variety (currently text-heavy)
- [ ] Real campus photos

### 8. Staff Directory Functionality
**Location:** `src/app/[locale]/about/staff/page.tsx`  
**Missing:**
- [ ] Working search functionality
- [ ] Working department filter
- [ ] Load more pagination
- [ ] Individual staff detail pages
- [ ] Photo upload capability

### 9. Contact Page Functionality
**Location:** `src/app/[locale]/contact/page.tsx`  
**Missing:**
- [ ] Form backend integration (EmailJS/SendGrid)
- [ ] Google Maps embed
- [ ] Success/error message states
- [ ] Standardize card colors to brand palette

### 10. Color Consistency Issues
**Problem:** Some pages use blue instead of red for CTAs  
**Files to Fix:**
- `src/app/[locale]/about/page.tsx` - Use red for primary buttons
- `src/app/[locale]/contact/page.tsx` - Fix contact card colors
- `src/components/layout/Header.tsx` - Ensure red accent

---

## 🟡 MEDIUM PRIORITY

### 11. Sub-Pages Need Creation

**Students Zone Sub-Pages:**
- [ ] `/students/football-academy` - Football Academy page
- [ ] `/students/music-academy` - Music Academy page
- [ ] `/students/library` - Library page
- [ ] `/students/student-council` - Student Council page
- [ ] `/students/achievements` - Achievements page
- [ ] `/students/projects` - Projects gallery

**Parents Zone Sub-Pages:**
- [ ] `/parents/recruitment` - Admissions page
- [ ] `/parents/forms` - Forms library
- [ ] `/parents/canteen` - Canteen menu
- [ ] `/parents/aftercare` - Aftercare info
- [ ] `/parents/bell-schedule` - Bell schedule
- [ ] `/parents/holidays` - Holiday calendar

**About Sub-Pages:**
- [ ] `/about/mission` - Mission & Values
- [ ] `/about/patron` - Willy Brandt page
- [ ] `/about/partners` - Partners & Sponsors
- [ ] `/about/certificates` - Certificates

### 12. Missing Components (Design System)

**From Design Brief Component Library:**
- [ ] TestimonialCard (create variant with carousel)
- [ ] EventCard (add to existing NewsCard)
- [ ] ProgramCard (for academies)
- [ ] Modal/Dialog (for video, forms)
- [ ] Tabs component
- [ ] Tables component
- [ ] Tooltips
- [ ] Pagination component

### 13. Missing Animations

**From Animation Agent Guide:**
- [ ] Scroll-triggered animations on all pages
- [ ] Loading skeletons for dynamic content
- [ ] Page transitions between routes
- [ ] Micro-interactions on all buttons
- [ ] Parallax effect on hero images

### 14. Accessibility Improvements

**From Compliance Checklist:**
- [ ] Add alt text to all images
- [ ] Implement focus trap in modals
- [ ] Add skip links to all pages
- [ ] Test with screen reader (NVDA/VoiceOver)
- [ ] Add ARIA labels to interactive elements
- [ ] Ensure keyboard navigation works everywhere

### 15. GDPR Compliance

**From Compliance Checklist:**
- [ ] Privacy Policy page (complete content)
- [ ] Cookie Policy page (complete content)
- [ ] Cookie consent banner (working)
- [ ] DPO contact info in footer
- [ ] Data subject rights mechanism
- [ ] Consent management system

---

## 🟢 LOW PRIORITY (Nice to Have)

### 16. Performance Optimization
- [ ] Implement lazy loading for images
- [ ] Add service worker for offline support
- [ ] Optimize bundle size
- [ ] Add image CDN

### 17. SEO Enhancements
- [ ] Add structured data (Schema.org)
- [ ] Create RSS feed for news
- [ ] Add Open Graph images
- [ ] Submit sitemap to Google Search Console

### 18. Additional Features
- [ ] Newsletter subscription integration
- [ ] Social media feed integration
- [ ] Photo galleries
- [ ] Video content
- [ ] Download center
- [ ] FAQ page

### 19. CMS Integration
- [ ] Connect to Sanity.io or Strapi
- [ ] Create content schemas
- [ ] Admin dashboard for staff
- [ ] Content preview functionality

---

## 📋 QUICK WINS (Can be done in 1-2 hours each)

1. **Add News section to homepage** - 30 min
2. **Add Events section to homepage** - 30 min
3. **Add Programs section to homepage** - 30 min
4. **Replace hero image placeholder** - 15 min
5. **Fix color consistency** - 30 min
6. **Add alt text to images** - 1 hour
7. **Create Modal component** - 1 hour
8. **Add loading skeletons** - 1 hour

---

## 🎯 RECOMMENDED NEXT STEPS

### Immediate (Today):
1. Add News section to homepage
2. Add Events section to homepage
3. Add Programs section to homepage
4. Replace hero image with real photo

### This Week:
5. Create missing sub-pages (Students, Parents)
6. Fix all color consistency issues
7. Add real photos throughout
8. Implement missing animations

### Next Week:
9. Complete all accessibility improvements
10. Finish GDPR compliance pages
11. Add all missing components
12. Performance optimization

---

## 📊 COMPLETION STATUS

| Category | Done | Total | % Complete |
|----------|------|-------|------------|
| **Content Migration** | ✅ | 100% |
| **Homepage** | 70% | 10 sections | 70% |
| **About Pages** | 60% | 1 main + 3 sub | 60% |
| **Students Pages** | 20% | 1 main + 6 sub | 20% |
| **Parents Pages** | 20% | 1 main + 6 sub | 20% |
| **News/Events** | 80% | Listing + detail | 80% |
| **Components** | 60% | 15 components | 60% |
| **Animations** | 40% | Basic done | 40% |
| **Accessibility** | 50% | Basic done | 50% |
| **GDPR** | 30% | Cookie banner | 30% |
| **Overall** | | | **~55%** |

---

## 🎯 SUCCESS CRITERIA

### Phase 1 Complete (Current):
- ✅ Content migrated
- ✅ Basic structure working
- ✅ Homepage functional

### Phase 2 Complete (Next):
- ⏳ All homepage sections visible
- ⏳ Real images throughout
- ⏳ Key sub-pages created
- ⏳ Color consistency fixed

### Phase 3 Complete (Final):
- ⏳ All pages complete
- ⏳ All animations working
- ⏳ Accessibility 95%+
- ⏳ GDPR compliant
- ⏳ Performance optimized

---

**This document should be reviewed and updated as tasks are completed.**

*Last Updated: 2026-03-13*
