# 🎨 WBS Website Design Brief
## Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta

---

## 📋 PROJECT OVERVIEW

### School Identity
- **Full Name (PL):** Polsko-Niemiecka Szkoła Spotkań i Dialogu im. Willy'ego Brandta w Warszawie
- **Full Name (DE):** Deutsch-Polnische Begegnungsschule Willy-Brandt-Schule Warschau
- **Full Name (EN):** Polish-German School of Meetings and Dialogue named after Willy Brandt
- **Short Name:** WBS
- **Founded:** 1978
- **Students:** ~300
- **Teachers:** 59
- **Grades:** 1-12 (plus Kindergarten)
- **Type:** German International School / Deutsche Auslandsschule

### Patron
**Willy Brandt** - Former German Chancellor, Nobel Peace Prize laureate

---

## 🎯 DESIGN OBJECTIVES

### Primary Goals
1. **Modern, professional appearance** reflecting educational excellence
2. **Trilingual support** (Polish, German, English) with seamless language switching
3. **Mobile-first responsive design** for all devices
4. **WCAG 2.1 AA accessibility compliance**
5. **Fast loading** (under 2 seconds)
6. **Clear information architecture** for parents, students, and staff

### Target Audience
- **Prospective parents** (primary decision makers)
- **Current parents** (information seekers)
- **Students** (primary users)
- **Teachers & Staff** (internal users)
- **Partners & Sponsors**
- **Job applicants**

---

## 🎨 VISUAL IDENTITY

### Color Scheme
*Note: Extract from current website during Phase 1*

Based on German-Polish school identity, expected colors:
- **Primary:** Deep Blue (trust, education, professionalism)
- **Secondary:** Warm accent color (friendliness, community)
- **Neutral:** White, Light Gray (clean, modern)
- **Accent:** Gold/Yellow (excellence, achievement)

### Typography
- **Headings:** Modern sans-serif (e.g., Inter, Poppins, or similar)
- **Body:** Highly readable sans-serif (e.g., Inter, Open Sans)
- **Sizes:** 
  - H1: 48px (desktop) / 32px (mobile)
  - H2: 36px / 28px
  - H3: 24px / 22px
  - Body: 16px / 16px

### Logo
- Extract current WBS logo
- Create SVG version for scalability
- Prepare variations (horizontal, vertical, icon-only)
- Ensure visibility on light and dark backgrounds

### Imagery Style
- **Authentic** photos of real students and school life
- **Bright, welcoming** atmosphere
- **Diverse** representation of school community
- **Professional** quality
- **Consistent** color grading and style

---

## 🏠 HOMEPAGE DESIGN REQUIREMENTS

### Above the Fold (Hero Section)
```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  Navigation Menu                    [PL|DE|EN] │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  │    HERO IMAGE/VIDEO                             │   │
│  │    (Students learning, campus life)             │   │
│  │                                                 │   │
│  │    "Polsko-Niemiecka Szkoła                     │   │
│  │     Spotkań i Dialogu"                          │   │
│  │                                                 │   │
│  │    [Apply Now] [Virtual Tour]                   │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Key Homepage Sections (In Order)

#### 1. Hero Section
- Large, impactful image or video slider
- School name in current language
- Tagline: "Education that connects cultures"
- Primary CTAs: "Apply Now", "Virtual Tour"
- Language switcher (always visible)

#### 2. Quick Links Bar
- 📅 Calendar
- 👤 Parent Portal
- 🎓 Student Portal
- 📰 News
- 📞 Contact
- 🍽️ Canteen Menu (weekly)

#### 3. About WBS (Introduction)
- Brief introduction (2-3 sentences)
- Key statistics (students, teachers, founded)
- "Learn More" link to About page
- Image of campus or students

#### 4. News & Announcements
- 3-4 latest news items with images
- Category badges (Events, Achievements, General)
- Date display
- "View All News" link

#### 5. Upcoming Events
- Interactive calendar preview
- Next 3-5 events with dates
- Event type icons
- "View Full Calendar" link

#### 6. Programs & Academies
- Football Academy card
- Music Academy card
- Choir card
- Library card
- Visual cards with icons/images

#### 7. Why Choose WBS (Value Proposition)
- Bilingual education
- International curriculum
- Experienced teachers
- Modern facilities
- Community focus
- Icons + short descriptions

#### 8. Testimonials/Success Stories
- Quote from parent/student/alumni
- Photo + name + role
- Carousel format

#### 9. Call to Action
- "Schedule a Visit"
- "Download Prospectus"
- "Contact Us"
- Background image

#### 10. Footer
- School contact info
- Quick navigation links
- Social media links
- Legal links (Privacy, Cookies, Accessibility)
- Copyright

---

## 📱 RESPONSIVE BREAKPOINTS

| Device | Width | Layout Changes |
|--------|-------|----------------|
| Mobile S | 320px | Single column, stacked elements |
| Mobile L | 375px | Single column |
| Tablet | 768px | Two columns, hamburger menu |
| Laptop | 1024px | Three columns, full navigation |
| Desktop | 1440px | Four columns max, full features |
| Large Desktop | 1920px | Max-width container, centered |

---

## ♿ ACCESSIBILITY REQUIREMENTS

### WCAG 2.1 AA Compliance
- ✅ **Color contrast ratio:** Minimum 4.5:1 for text
- ✅ **Keyboard navigation:** All interactive elements accessible
- ✅ **Screen reader support:** Proper ARIA labels
- ✅ **Focus indicators:** Visible focus states
- ✅ **Alt text:** All images have descriptive alt text
- ✅ **Semantic HTML:** Proper heading hierarchy
- ✅ **Skip links:** Skip to main content option
- ✅ **Form labels:** All inputs properly labeled
- ✅ **Error messages:** Clear, descriptive error messages
- ✅ **Language attribute:** Proper lang attribute on HTML

### Accessibility Features
- Font size adjustment option
- High contrast mode toggle
- Dyslexia-friendly font option
- Reduced motion option

---

## 🔤 INTERNATIONALIZATION (i18n)

### Supported Languages
1. **Polish (pl)** - Default
2. **German (de)**
3. **English (en)**

### Language Switcher
- Always visible in header
- Clear language names or flags
- Remembers user preference
- Updates URL structure: `/pl/`, `/de/`, `/en/`

### Translation Strategy
- All content available in all 3 languages
- Professional translation for official content
- Consistent terminology across languages
- RTL support not needed (all LTR languages)

---

## 🎯 KEY PAGES TO DESIGN

### Primary Pages
1. **Homepage** (this brief)
2. **About Us** (School info, Mission, History)
3. **Admissions** (Process, Requirements, Forms)
4. **News Listing** (Filterable, searchable)
5. **Events Calendar** (Interactive)
6. **Staff Directory** (Searchable, filterable)
7. **Contact** (Map, form, info)

### Parent Zone Pages
8. **Parent Dashboard**
9. **Forms Library**
10. **Canteen Menu**
11. **Aftercare Info**
12. **Holiday Calendar**

### Student Zone Pages
13. **Student Dashboard**
14. **Projects Gallery**
15. **Academies Info**
16. **Library Catalog**
17. **Achievements**

### Legal Pages
18. **Privacy Policy**
19. **Cookie Policy**
20. **Accessibility Statement**
21. **Imprint**

---

## 📊 COMPONENT LIBRARY

### Navigation Components
- Header (with language switcher)
- Footer
- Mobile menu (hamburger)
- Breadcrumbs
- Pagination

### Content Components
- News cards
- Event cards
- Staff cards
- Program cards
- Testimonial cards
- CTA banners
- Image galleries

### Form Components
- Text inputs
- Select dropdowns
- Checkboxes
- Radio buttons
- File upload
- Contact forms
- Search bars

### UI Elements
- Buttons (primary, secondary, outline)
- Badges/Tags
- Alerts/Notifications
- Modals/Dialogs
- Tooltips
- Accordions
- Tabs
- Tables

---

## 🎬 ANIMATIONS & INTERACTIONS

### Principles
- **Subtle** and purposeful
- **Performance-friendly** (CSS transforms)
- **Accessible** (reduced motion option)
- **Consistent** timing and easing

### Micro-interactions
- Button hover states
- Card hover lift effect
- Smooth scroll
- Fade-in on scroll
- Loading skeletons
- Form validation feedback

---

## 📈 PERFORMANCE TARGETS

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 300ms |
| PageSpeed Score | 90+ |

### Optimization Strategies
- Image optimization (WebP format)
- Lazy loading for images
- Code splitting
- CSS/JS minification
- CDN for static assets
- Server-side rendering (Next.js)

---

## 🔧 TECHNICAL SPECIFICATIONS

### Framework
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

### File Structure
```
src/
├── app/
│   ├── [lang]/
│   │   ├── page.tsx (Homepage)
│   │   ├── about/
│   │   ├── news/
│   │   └── ...
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   └── features/
├── lib/
│   ├── i18n/
│   └── utils/
└── assets/
    ├── images/
    └── fonts/
```

---

## ✅ DESIGN DELIVERABLES

### Phase 1: Concept
- [ ] Mood board
- [ ] Color palette
- [ ] Typography system
- [ ] Logo variations

### Phase 2: Homepage
- [ ] Desktop mockup (1440px)
- [ ] Tablet mockup (768px)
- [ ] Mobile mockup (375px)
- [ ] Interactive prototype

### Phase 3: Component Library
- [ ] All UI components
- [ ] Form elements
- [ ] Cards and layouts
- [ ] Navigation components

### Phase 4: Internal Pages
- [ ] About page
- [ ] News listing
- [ ] Events calendar
- [ ] Staff directory
- [ ] Contact page

### Phase 5: Handoff
- [ ] Figma/Sketch files
- [ ] Style guide documentation
- [ ] Asset export
- [ ] Developer handoff notes

---

## 📝 NOTES FOR DESIGNERS

1. **Keep it clean and professional** - This is an educational institution
2. **Prioritize accessibility** - WCAG 2.1 AA is mandatory
3. **Design mobile-first** - Most parents will access on mobile
4. **Use real content** - Design with actual text, not lorem ipsum
5. **Consider all three languages** - Text length varies by language
6. **Make CTAs clear** - Apply, Contact, Visit should be obvious
7. **Show, don't tell** - Use photos of real school life
8. **Performance matters** - Don't over-design with heavy assets

---

## 🔗 INSPIRATION REFERENCES

### School Websites
- The British School Warsaw
- American School of Warsaw
- International School of Berlin
- Deutsche Schule London
- Lycée Français de Varsovie

### Design Resources
- Dribbble (search: school website, education)
- Behance (education web design)
- Awwwards (education category)
- SiteInspire (education filter)

---

*Document Version: 1.0*
*Created: 2026-03-13*
*Last Updated: 2026-03-13*
