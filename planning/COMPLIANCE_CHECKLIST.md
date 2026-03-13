# ✅ WBS Website Compliance Checklist

## GDPR & Accessibility Compliance Documentation

---

## 🔒 GDPR COMPLIANCE

### 1. Privacy Policy
**Status:** ⏳ Pending

**Requirements:**
- [ ] Available in Polish, German, and English
- [ ] Clear explanation of data processing purposes
- [ ] Legal basis for each processing activity
- [ ] Data retention periods
- [ ] Data subject rights explanation
- [ ] DPO contact information
- [ ] Last updated date
- [ ] Version history

**Content Checklist:**
- [ ] School identification (name, address, REGON, NIP)
- [ ] Types of personal data collected
- [ ] Purposes of processing (education, administration, etc.)
- [ ] Legal basis (GDPR Art. 6)
- [ ] Special category data handling (health, etc.)
- [ ] Data recipients (third parties, processors)
- [ ] International transfers (if any)
- [ ] Retention periods
- [ ] Data subject rights (access, rectification, erasure, etc.)
- [ ] Right to lodge complaint with UODO
- [ ] Automated decision-making disclosure
- [ ] Contact details for DPO

**Template Location:** `/src/app/[lang]/privacy/page.tsx`

---

### 2. Cookie Policy
**Status:** ⏳ Pending

**Requirements:**
- [ ] Available in Polish, German, and English
- [ ] Clear explanation of what cookies are
- [ ] Cookie categories explained
- [ ] Detailed cookie inventory
- [ ] Consent mechanism description
- [ ] How to manage/disable cookies
- [ ] Last updated date

**Cookie Categories:**
- [ ] Technical/Functional (necessary, no consent required)
- [ ] Statistics/Analytics (consent required)
- [ ] Marketing (consent required)
- [ ] Social Media (consent required)

**Cookie Inventory Template:**
```json
{
  "cookies": [
    {
      "name": "cookie_name",
      "provider": "Google Analytics",
      "purpose": "Analytics",
      "duration": "2 years",
      "type": "statistics",
      "dataCollected": "User behavior",
      "thirdParty": true,
      "privacyPolicy": "https://..."
    }
  ]
}
```

**Template Location:** `/src/app/[lang]/cookies/page.tsx`

---

### 3. Cookie Consent Banner
**Status:** ⏳ Pending

**Requirements:**
- [ ] Prior consent before non-essential cookies
- [ ] Granular consent options (by category)
- [ ] Clear accept/reject buttons
- [ ] Easy to withdraw consent
- [ ] Consent preferences stored
- [ ] Consent renewal (at least annually)
- [ ] No pre-ticked boxes
- [ ] Equal prominence for accept/reject

**UI Requirements:**
- [ ] Banner on first visit
- [ ] Clear explanation of each category
- [ ] "Accept All" button
- [ ] "Reject All" button
- [ ] "Customize" button
- [ ] Link to cookie policy
- [ ] Persistent settings icon

**Technical Implementation:**
```typescript
// Consent state management
interface CookieConsent {
  necessary: boolean; // Always true
  statistics: boolean;
  marketing: boolean;
  socialMedia: boolean;
  timestamp: Date;
  version: string;
}
```

**Component Location:** `/src/components/features/CookieConsent/CookieConsent.tsx`

---

### 4. Data Protection Officer (DPO)
**Status:** ⏳ Pending

**Requirements:**
- [ ] DPO appointed (mandatory for public schools)
- [ ] DPO contact information published
- [ ] DPO independence ensured
- [ ] DPO involved in all data protection matters

**Information to Publish:**
- [ ] DPO name
- [ ] Email address
- [ ] Phone number
- [ ] Postal address
- [ ] When to contact DPO

**Location:** Footer + Privacy Policy + Dedicated page

---

### 5. Data Subject Rights Mechanism
**Status:** ⏳ Pending

**Rights to Implement:**
- [ ] Right of access (Art. 15)
- [ ] Right to rectification (Art. 16)
- [ ] Right to erasure (Art. 17)
- [ ] Right to restrict processing (Art. 18)
- [ ] Right to data portability (Art. 20)
- [ ] Right to object (Art. 21)
- [ ] Rights regarding automated decision-making (Art. 22)

**Implementation:**
- [ ] Request form available
- [ ] Clear instructions for submitting requests
- [ ] 1-month response timeline
- [ ] Identity verification process
- [ ] Response template for each right

**Form Location:** `/src/app/[lang]/data-request/page.tsx`

---

### 6. Record of Processing Activities (RoPA)
**Status:** ⏳ Pending

**Required Documentation:**
- [ ] Processing purposes
- [ ] Data categories
- [ ] Data subject categories
- [ ] Recipients of data
- [ ] International transfers
- [ ] Retention periods
- [ ] Security measures

**Processing Activities for Schools:**
1. Student enrollment and administration
2. Academic records and grading
3. Attendance tracking
4. Health and medical information
5. Staff administration
6. Financial administration
7. Communication with parents
8. Website and IT systems
9. Marketing and communications
10. Security and surveillance

**Template:** Internal document (not published)

---

### 7. Data Processing Agreements
**Status:** ⏳ Pending

**Third-Party Processors:**
- [ ] Hosting provider (Vercel)
- [ ] Analytics (Google Analytics)
- [ ] Email service
- [ ] Cloud storage
- [ ] Learning management system
- [ ] Student information system
- [ ] Payment processors
- [ ] Any other processors

**DPA Requirements:**
- [ ] Subject matter and duration
- [ ] Nature and purpose of processing
- [ ] Type of personal data
- [ ] Categories of data subjects
- [ ] Processor obligations
- [ ] Security measures
- [ ] Sub-processor rules
- [ ] Data subject rights assistance
- [ ] Breach notification
- [ ] Deletion/return of data
- [ ] Audit rights

---

### 8. Breach Notification Procedure
**Status:** ⏳ Pending

**Internal Procedure:**
- [ ] Breach detection mechanism
- [ ] Internal reporting流程
- [ ] Risk assessment process
- [ ] 72-hour notification to UODO
- [ ] Notification to affected individuals (if high risk)
- [ ] Documentation of all breaches
- [ ] Post-breach review

**Contact:**
- UODO: ul. Stawki 2, 00-193 Warsaw
- Phone: +48 22 860 70 86
- Email: kancelaria@uodo.gov.pl

---

## ♿ ACCESSIBILITY COMPLIANCE (WCAG 2.1 AA)

### Accessibility Statement
**Status:** ⏳ Pending

**Requirements:**
- [ ] Available in Polish, German, and English
- [ ] Compliance status (fully/partially/not compliant)
- [ ] Date of preparation/last review
- [ ] Preparation method (self-evaluation, external audit)
- [ ] Feedback mechanism
- [ ] Enforcement procedure
- [ ] Contact information

**Content:**
```markdown
# Accessibility Statement

## Compliance Status
[ ] Fully compliant
[ ] Partially compliant
[ ] Not compliant

## Non-Accessible Content
[List any known issues with reasons]

## Feedback Mechanism
[Contact information for accessibility issues]

## Enforcement Procedure
[Information about lodging complaints with UODO]

## Technical Specifications
- HTML5
- WAI-ARIA 1.1
- CSS3
- JavaScript ES6

## Compatibility
- Chrome + NVDA/JAWS
- Firefox + NVDA/JAWS
- Safari + VoiceOver
- Edge + NVDA/JAWS

## Last Updated: [DATE]
```

**Location:** `/src/app/[lang]/accessibility/page.tsx`

---

### WCAG 2.1 AA Success Criteria

#### Perceivable
- [ ] 1.1.1 Non-text Content (Alt text for images)
- [ ] 1.2.1 Audio-only and Video-only (Prerecorded)
- [ ] 1.3.1 Info and Relationships (Semantic HTML)
- [ ] 1.3.2 Meaningful Sequence
- [ ] 1.3.3 Sensory Characteristics
- [ ] 1.4.1 Use of Color
- [ ] 1.4.2 Audio Control
- [ ] 1.4.3 Contrast (Minimum) - 4.5:1
- [ ] 1.4.4 Resize Text - up to 200%
- [ ] 1.4.5 Images of Text
- [ ] 1.4.10 Reflow - no horizontal scrolling
- [ ] 1.4.11 Non-text Contrast
- [ ] 1.4.12 Text Spacing
- [ ] 1.4.13 Content on Hover or Focus

#### Operable
- [ ] 2.1.1 Keyboard (All functionality keyboard accessible)
- [ ] 2.1.2 No Keyboard Trap
- [ ] 2.2.1 Timing Adjustable
- [ ] 2.2.2 Pause, Stop, Hide (Moving content)
- [ ] 2.3.1 Three Flashes (No seizure-inducing content)
- [ ] 2.4.1 Bypass Blocks (Skip links)
- [ ] 2.4.2 Page Titled
- [ ] 2.4.3 Focus Order
- [ ] 2.4.4 Link Purpose (In Context)
- [ ] 2.4.5 Multiple Ways
- [ ] 2.4.6 Headings and Labels
- [ ] 2.4.7 Focus Visible
- [ ] 2.5.1 Pointer Gestures
- [ ] 2.5.2 Pointer Cancellation
- [ ] 2.5.3 Label in Name
- [ ] 2.5.4 Motion Actuation

#### Understandable
- [ ] 3.1.1 Language of Page (lang attribute)
- [ ] 3.1.2 Language of Parts
- [ ] 3.2.1 On Focus (No unexpected context changes)
- [ ] 3.2.2 On Input (No unexpected context changes)
- [ ] 3.2.3 Consistent Navigation
- [ ] 3.2.4 Consistent Identification
- [ ] 3.3.1 Error Identification (Forms)
- [ ] 3.3.2 Labels or Instructions (Forms)
- [ ] 3.3.3 Error Suggestion
- [ ] 3.3.4 Error Prevention (Legal/Financial)
- [ ] 3.3.5 Help
- [ ] 3.3.6 Error Prevention (All)

#### Robust
- [ ] 4.1.1 Parsing (Valid HTML)
- [ ] 4.1.2 Name, Role, Value (ARIA)
- [ ] 4.1.3 Status Messages

---

### Accessibility Implementation Checklist

#### HTML Structure
- [ ] Valid HTML5
- [ ] Proper heading hierarchy (H1-H6)
- [ ] Semantic elements (nav, main, article, section, footer)
- [ ] Lang attribute on HTML element
- [ ] Document title

#### Navigation
- [ ] Skip to main content link
- [ ] Keyboard navigable menu
- [ ] Focus indicators
- [ ] ARIA labels for navigation
- [ ] Breadcrumb navigation

#### Images
- [ ] Alt text for all informative images
- [ ] Empty alt for decorative images
- [ ] Long descriptions for complex images
- [ ] SVG accessibility (title, desc)

#### Forms
- [ ] Labels for all inputs
- [ ] Fieldset and legend for groups
- [ ] Error messages linked to inputs
- [ ] Error prevention and suggestions
- [ ] Required field indicators

#### Links
- [ ] Descriptive link text
- [ ] No "click here"
- [ ] External link indicators
- [ ] Download link indicators (file type, size)
- [ ] Focus indicators

#### Tables
- [ ] Table headers (th)
- [ ] Scope attributes
- [ ] Captions for data tables
- [ ] Avoid layout tables

#### Dynamic Content
- [ ] ARIA live regions
- [ ] Focus management
- [ ] Modal dialog accessibility
- [ ] Dropdown menu accessibility
- [ ] Accordion/tabs accessibility

#### Multimedia
- [ ] Captions for videos
- [ ] Audio descriptions
- [ ] Transcripts
- [ ] Media player accessibility

#### Color & Contrast
- [ ] Text contrast 4.5:1 minimum
- [ ] Large text 3:1 minimum
- [ ] UI components 3:1 minimum
- [ ] Not relying on color alone
- [ ] Dark mode option

#### Keyboard Accessibility
- [ ] All interactive elements focusable
- [ ] Logical focus order
- [ ] Visible focus indicators
- [ ] No keyboard traps
- [ ] Custom keyboard shortcuts documented

#### Screen Reader Support
- [ ] ARIA labels where needed
- [ ] ARIA roles for custom components
- [ ] ARIA states and properties
- [ ] Hidden content properly marked
- [ ] Landmark regions

---

## 🇵🇱 POLISH LEGAL REQUIREMENTS

### Imprint/Impressum
**Status:** ⏳ Pending

**Required Information:**
- [ ] School name (full legal name)
- [ ] School address
- [ ] REGON number
- [ ] NIP number
- [ ] Contact information (phone, email)
- [ ] Governing body information
- [ ] DPO contact
- [ ] Link to privacy policy

**Location:** `/src/app/[lang]/impressum/page.tsx`

---

### Child Protection Policy
**Status:** ⏳ Pending

**Requirements:**
- [ ] Safeguarding statement
- [ ] Child protection procedures
- [ ] Reporting mechanisms
- [ ] Staff vetting disclosure
- [ ] Contact for safeguarding concerns

---

## 📋 COMPLIANCE AUDIT SCHEDULE

| Audit Type | Frequency | Next Due | Owner |
|------------|-----------|----------|-------|
| GDPR Compliance | Annual | 2027-03-13 | Legal |
| Accessibility | Annual | 2027-03-13 | QA |
| Security | Annual | 2027-03-13 | Tech |
| Content Review | Quarterly | 2026-06-13 | Content |
| Cookie Consent | Annual | 2027-03-13 | Tech |

---

## 📞 REGULATORY CONTACTS

### Data Protection Authority (Poland)
**Urząd Ochrony Danych Osobowych (UODO)**
- Address: ul. Stawki 2, 00-193 Warsaw
- Phone: +48 22 860 70 86
- Email: kancelaria@uodo.gov.pl
- Website: uodo.gov.pl

### Accessibility Enforcement
**Ministerstwo Cyfryzacji**
- Website: gov.pl/cyfryzacja

---

## 📊 COMPLIANCE STATUS SUMMARY

| Requirement | Status | Due Date | Priority |
|-------------|--------|----------|----------|
| Privacy Policy | ⏳ Pending | Week 3 | Critical |
| Cookie Policy | ⏳ Pending | Week 3 | Critical |
| Cookie Consent Banner | ⏳ Pending | Week 3 | Critical |
| DPO Information | ⏳ Pending | Week 3 | Critical |
| Accessibility Statement | ⏳ Pending | Week 3 | Critical |
| Imprint/Impressum | ⏳ Pending | Week 3 | Critical |
| Data Request Form | ⏳ Pending | Week 3 | High |
| Child Protection Policy | ⏳ Pending | Week 3 | High |
| WCAG 2.1 AA Implementation | ⏳ Pending | Week 5 | Critical |
| RoPA (Internal) | ⏳ Pending | Week 4 | High |
| Data Processing Agreements | ⏳ Pending | Week 4 | High |
| Breach Procedure (Internal) | ⏳ Pending | Week 4 | High |

---

*Document Version: 1.0*
*Created: 2026-03-13*
*Last Updated: 2026-03-13*
*Next Review: 2026-04-13*
