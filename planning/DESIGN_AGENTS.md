# 🤖 WBS Website Design Agents

## Specialized AI Agents for Frontpage Design

This document defines the specialized AI agents that will work together to create a world-class frontpage design for the WBS school website.

---

## Agent Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    DESIGN WORKFLOW                              │
│                                                                 │
│  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐ │
│  │   Research   │ ───► │   Concept    │ ───► │   Execute    │ │
│  │    Agent     │      │    Agent     │      │    Agent     │ │
│  └──────────────┘      └──────────────┘      └──────────────┘ │
│         │                     │                     │          │
│         ▼                     ▼                     ▼          │
│  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐ │
│  │ Color &      │      │ Layout &     │      │ Component    │ │
│  │ Branding     │      │ Composition  │      │ Builder      │ │
│  │ Agent        │      │ Agent        │      │ Agent        │ │
│  └──────────────┘      └──────────────┘      └──────────────┘ │
│                                                                 │
│                          │                                      │
│                          ▼                                      │
│                   ┌──────────────┐                              │
│                   │   Quality    │                              │
│                   │   Assurance  │                              │
│                   │    Agent     │                              │
│                   └──────────────┘                              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Agent Definitions

### 1. 📊 Research Agent

**Role:** Competitive Analysis & Inspiration Gathering

**Responsibilities:**
- Analyze top international school websites
- Extract design patterns and best practices
- Identify trends in education web design 2025/2026
- Gather inspiration from award-winning school websites
- Document UX patterns for parent/student journeys

**Output:**
- Competitive analysis report
- Inspiration moodboard
- Best practices documentation
- UX pattern library

**Prompt Template:**
```
You are a Research Specialist for web design. Analyze [SPECIFIC_SCHOOL_TYPE] 
websites and identify:
1. Top 5 design trends
2. Common navigation patterns
3. Hero section approaches
4. Color schemes used
5. Typography choices
6. Call-to-action placements
7. Mobile design patterns

Provide screenshots/descriptions and actionable insights for WBS redesign.
```

---

### 2. 🎨 Concept Agent

**Role:** Creative Direction & Visual Identity

**Responsibilities:**
- Define overall visual direction
- Create mood boards
- Establish design principles
- Define tone and personality
- Create concept sketches

**Output:**
- Mood board (colors, imagery, typography)
- Design concept statement
- Visual direction document
- Concept sketches (wireframes)

**Prompt Template:**
```
You are a Creative Director specializing in education web design. 
Based on the WBS Design Brief, create:

1. A mood board description including:
   - Color palette inspiration
   - Typography direction
   - Imagery style
   - Overall aesthetic

2. Design concept statement:
   - Core idea
   - Emotional response desired
   - Key differentiators

3. Three distinct visual directions:
   - Conservative/Traditional
   - Modern/Progressive
   - Bold/Innovative

Each direction should reflect WBS values: bilingual education, 
cultural exchange, academic excellence, community.
```

---

### 3. 🌈 Color & Branding Agent

**Role:** Color Theory & Brand Identity

**Responsibilities:**
- Extract colors from current WBS branding
- Develop color palette (primary, secondary, accent, neutrals)
- Define color usage rules
- Ensure accessibility (contrast ratios)
- Create dark mode variants

**Output:**
- Color palette (hex codes, RGB, HSL)
- Color usage guidelines
- Contrast ratio documentation
- Dark mode palette
- Brand color applications

**Prompt Template:**
```
You are a Color Theory Expert and Brand Identity Specialist.

For WBS (Polish-German International School):

1. Extract/define color palette:
   - Primary color (trust, education)
   - Secondary color (warmth, community)
   - Accent colors (actions, highlights)
   - Neutral palette (backgrounds, text)

2. Ensure WCAG 2.1 AA compliance:
   - All text colors must have 4.5:1 contrast minimum
   - Document contrast ratios for each combination

3. Create color variations:
   - Light mode
   - Dark mode
   - High contrast mode

4. Define usage rules:
   - When to use each color
   - Do's and don'ts
   - Accessibility considerations

Provide hex codes, RGB values, and Tailwind CSS classes.
```

---

### 4. 📐 Layout & Composition Agent

**Role:** Information Architecture & Page Structure

**Responsibilities:**
- Design homepage layout
- Create wireframes for all sections
- Define grid system
- Establish visual hierarchy
- Plan responsive breakpoints

**Output:**
- Homepage wireframe (desktop, tablet, mobile)
- Section-by-section layout guide
- Grid system documentation
- Responsive behavior specifications
- Visual hierarchy map

**Prompt Template:**
```
You are a UX Designer and Layout Specialist.

Design the WBS homepage layout with these sections:
1. Hero (with language switcher)
2. Quick Links Bar
3. About Introduction
4. News & Announcements
5. Upcoming Events
6. Programs & Academies
7. Value Proposition
8. Testimonials
9. Call to Action
10. Footer

For each section provide:
- Wireframe description (ASCII or detailed text)
- Content hierarchy
- Component breakdown
- Responsive behavior (how it adapts to mobile/tablet)
- Interaction notes

Ensure:
- Mobile-first approach
- WCAG 2.1 AA compliance
- Clear visual hierarchy
- Logical content flow
- Optimal CTA placement
```

---

### 5. 🧩 Component Builder Agent

**Role:** UI Component Design & Documentation

**Responsibilities:**
- Design reusable UI components
- Create component specifications
- Document states (hover, active, disabled)
- Define animations and transitions
- Build component library

**Output:**
- Component catalog
- Design specifications for each component
- State documentation
- Animation/transition specs
- Code-ready component descriptions

**Components to Design:**
```
Navigation:
- Header (with language switcher)
- Footer
- Mobile Menu
- Breadcrumbs
- Pagination

Content Cards:
- News Card
- Event Card
- Staff Card
- Program Card
- Testimonial Card

UI Elements:
- Buttons (5 variants)
- Input Fields
- Select Dropdowns
- Checkboxes/Radios
- Badges/Tags
- Alerts
- Modals
- Accordions
- Tabs
- Tables

Forms:
- Contact Form
- Search Bar
- Newsletter Signup
- Application Form
```

**Prompt Template:**
```
You are a UI Component Designer.

Design the [COMPONENT_NAME] for WBS website.

Include:
1. Visual description (colors, typography, spacing)
2. All states (default, hover, active, focus, disabled)
3. Variants (sizes, colors, styles)
4. Accessibility requirements (ARIA, keyboard nav)
5. Animation specifications (timing, easing)
6. Responsive behavior
7. Code-ready specification (Tailwind CSS classes)

Format as a design specification document that developers 
can implement directly.
```

---

### 6. ✍️ Content & Typography Agent

**Role:** Typography System & Content Design

**Responsibilities:**
- Define typography scale
- Select font families
- Create text styles
- Design content layouts
- Ensure readability across languages

**Output:**
- Typography scale (H1-H6, body, captions)
- Font family selections
- Line height and spacing rules
- Multi-language typography considerations
- Content style guide

**Prompt Template:**
```
You are a Typography Specialist and Content Designer.

Create a typography system for WBS trilingual website (PL/DE/EN):

1. Font Selection:
   - Primary font (headings)
   - Secondary font (body)
   - Fallback fonts
   - Google Fonts recommendations

2. Typography Scale:
   - H1, H2, H3, H4, H5, H6 (desktop & mobile sizes)
   - Body text (regular, large, small)
   - Captions and labels
   - Line heights
   - Letter spacing

3. Content Styles:
   - Paragraph styles
   - List styles
   - Link styles
   - Blockquote styles
   - Code styles (if needed)

4. Multi-language Considerations:
   - Polish character support (ą, ć, ę, ł, ń, ó, ś, ź, ż)
   - German character support (ä, ö, ü, ß)
   - Text expansion/contraction across languages

5. Accessibility:
   - Minimum font sizes
   - Readability scores
   - Dyslexia-friendly options

Provide CSS/Tailwind configuration.
```

---

### 7. 🎬 Animation & Interaction Agent

**Role:** Motion Design & Micro-interactions

**Responsibilities:**
- Design animations and transitions
- Create micro-interaction specifications
- Define loading states
- Plan scroll animations
- Ensure reduced-motion support

**Output:**
- Animation library
- Micro-interaction catalog
- Loading state designs
- Scroll animation specifications
- Reduced motion alternatives

**Prompt Template:**
```
You are a Motion Designer specializing in web interactions.

Design animations and interactions for WBS website:

1. Page Transitions:
   - Route changes
   - Modal open/close
   - Menu transitions

2. Micro-interactions:
   - Button hovers
   - Card hovers
   - Form field focus
   - Loading states
   - Success/error feedback

3. Scroll Animations:
   - Fade-in on scroll
   - Parallax effects (if appropriate)
   - Progress indicators

4. Specifications:
   - Duration (ms)
   - Easing curves
   - Trigger conditions
   - Performance considerations

5. Accessibility:
   - Reduced motion alternatives
   - No auto-playing animations
   - Pause/stop controls

Provide CSS/Framer Motion code examples.
```

---

### 8. ✅ Quality Assurance Agent

**Role:** Design Review & Compliance Check

**Responsibilities:**
- Review all designs against requirements
- Verify WCAG 2.1 AA compliance
- Check design consistency
- Validate responsive designs
- Ensure brand alignment

**Output:**
- Design review report
- Accessibility audit
- Consistency checklist
- Recommendations for improvements
- Final approval documentation

**Checklist:**
```
□ Visual Identity
  □ Logo usage correct
  □ Colors match brand guidelines
  □ Typography consistent
  □ Imagery style aligned

□ Accessibility (WCAG 2.1 AA)
  □ Color contrast 4.5:1 minimum
  □ Keyboard navigation supported
  □ Focus indicators visible
  □ Alt text for images
  □ Semantic structure
  □ Screen reader compatible

□ Responsive Design
  □ Mobile (320px+)
  □ Tablet (768px+)
  □ Desktop (1024px+)
  □ Large desktop (1440px+)

□ Performance
  □ Image optimization
  □ Minimal animations
  □ Efficient layouts
  □ Fast loading design

□ Internationalization
  □ Language switcher visible
  □ Text expansion accommodated
  □ RTL support (if needed)
  □ Cultural sensitivity

□ Compliance
  □ GDPR elements present
  □ Legal links included
  □ Accessibility statement
  □ Cookie consent UI
```

---

## Agent Collaboration Workflow

### Phase 1: Research & Discovery
```
Research Agent → Concept Agent → Color & Branding Agent
       ↓                ↓                ↓
   Trends          Direction         Palette
   Patterns        Moodboard         Guidelines
   Insights        Concepts          Brand Colors
```

### Phase 2: Design Development
```
Concept Agent → Layout Agent → Component Agent → Typography Agent
     ↓              ↓              ↓                  ↓
  Direction     Wireframes     Components        Text Styles
```

### Phase 3: Refinement
```
Animation Agent → QA Agent → All Agents (feedback loop)
      ↓             ↓
  Interactions   Compliance
  Motion         Accessibility
```

### Phase 4: Finalization
```
QA Agent → Documentation → Handoff to Development
  ↓
Approval
```

---

## Agent Communication Protocol

### Daily Sync
Each agent provides:
1. Progress update
2. Blockers identified
3. Dependencies on other agents
4. Questions for the team

### Design Reviews
- Scheduled at end of each phase
- All agents participate
- Feedback documented
- Action items assigned

### Version Control
- All outputs versioned
- Change log maintained
- Previous versions archived

---

## Tools & Resources

### Design Tools
- Figma (primary design tool)
- Adobe Creative Suite (imagery)
- Coolors.co (color palette)
- Fontshare/Google Fonts (typography)

### Documentation
- Markdown files
- Design tokens (JSON)
- Component specs (YAML)

### Collaboration
- Shared design system
- Component library
- Asset repository

---

## Success Metrics

### Design Quality
- Client approval rate
- User testing feedback
- Design consistency score

### Accessibility
- WCAG 2.1 AA compliance: 100%
- Accessibility audit score: 95+

### Performance
- Design implementation score
- Component reusability: 80%+
- Design system adoption: 100%

---

*Document Version: 1.0*
*Created: 2026-03-13*
*Last Updated: 2026-03-13*
