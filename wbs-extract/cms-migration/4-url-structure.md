# WBS Website URL Structure
## Clean URL Architecture for New Website

---

## URL Design Principles

1. **Language-first**: `/pl/`, `/de/`, `/en/` prefix
2. **Readable**: Polish words, kebab-case
3. **SEO-friendly**: Keywords in URLs
4. **Consistent**: Predictable patterns
5. **Short**: No unnecessary words

---

## URL Mapping

### Homepage

| Old URL | New URL |
|---------|---------|
| `/strona_glowna-1298.html` | `/pl` |
| `/strona_glowna-1388.html` | `/pl` |
| `/` | `/pl` (redirect based on browser lang) |

### News & Articles

| Old URL | New URL |
|---------|---------|
| `/aktualnosci-1338.html` | `/pl/aktualnosci` |
| `/aktualnosci-1393.html` | `/pl/aktualnosci` |
| `/aktualne_wydarzenia-1339.html` | `/pl/aktualnosci` |
| `/nadchodzace_wydarzenia-1340.html` | `/pl/wydarzenia/nadchodzace` |
| `/archiwum-2097.html` | `/pl/archiwum` |
| `/archiwum-1589.html` | `/pl/archiwum` |
| `/{article-slug}-1234.html` | `/pl/aktualnosci/{clean-slug}` |

**Article URL Pattern:**
```
/pl/aktualnosci/{article-slug}
/de/aktuelles/{article-slug}
/en/news/{article-slug}
```

### About School

| Old URL | New URL |
|---------|---------|
| `/o_nas-1397.html` | `/pl/o-szkole` |
| `/o_nas-1346.html` | `/pl/o-szkole` |
| `/szkola_wbs-1421.html` | `/pl/o-szkole` |
| `/szkola_wbs-2098.html` | `/pl/o-szkole` |
| `/misja-1398.html` | `/pl/o-szkole/misja` |
| `/misja-1347.html` | `/pl/o-szkole/misja` |
| `/zespol-1399.html` | `/pl/kadra` |
| `/zespol-1348.html` | `/pl/kadra` |
| `/patron_szkoly-2358.html` | `/pl/o-szkole/patron` |
| `/organ_prowadzacy-1471.html` | `/pl/o-szkole/organ-prowadzacy` |
| `/organ_prowadzacy-2100.html` | `/pl/o-szkole/organ-prowadzacy` |
| `/nasi_partnerzy_i_sponsorzy-2377.html` | `/pl/o-szkole/partnerzy` |

### For Parents (Dla Rodziców)

| Old URL | New URL |
|---------|---------|
| `/strefa_rodzica-1401.html` | `/pl/dla-rodzicow` |
| `/strefa_rodzica-1356.html` | `/pl/dla-rodzicow` |
| `/rekrutacja-1402.html` | `/pl/rekrutacja` |
| `/rekrutacja-1357.html` | `/pl/rekrutacja` |
| `/rekrutacja-3859.html` | `/pl/rekrutacja` |
| `/formularze_do_pobrania-1408.html` | `/pl/dla-rodzicow/formularze` |
| `/formularze_do_pobrania-1358.html` | `/pl/dla-rodzicow/formularze` |
| `/regulaminy-1360.html` | `/pl/dla-rodzicow/regulaminy` |
| `/regulamin-1410.html` | `/pl/dla-rodzicow/regulaminy` |
| `/regulamin_platnosci-1409.html` | `/pl/dla-rodzicow/regulaminy/platnosci` |
| `/stolowka_szkolna-1422.html` | `/pl/dla-rodzicow/stolowka` |
| `/stolowka_szkolna_-2104.html` | `/pl/dla-rodzicow/stolowka` |
| `/opieka_popoludniowa-1364.html` | `/pl/dla-rodzicow/swietlica` |
| `/opieka_popoludniowa-1414.html` | `/pl/dla-rodzicow/swietlica` |
| `/rada_rodzicow-2423.html` | `/pl/dla-rodzicow/rada-rodzicow` |
| `/rada_rodzicow_-2105.html` | `/pl/dla-rodzicow/rada-rodzicow` |
| `/plan_ferii_2025_26-3002.html` | `/pl/dla-rodzicow/ferie/2025-26` |
| `/plan_ferii_2026_27-1429.html` | `/pl/dla-rodzicow/ferie/2026-27` |
| `/plan_ferii-2106.html` | `/pl/dla-rodzicow/ferie` |
| `/dzwonki-4380.html` | `/pl/dla-rodzicow/dzwonki` |
| `/dzwonki-2109.html` | `/pl/dla-rodzicow/dzwonki` |
| `/karta_ucznia_ztm-4639.html` | `/pl/dla-rodzicow/karta-ztm` |
| `/karta_ucznia_ztm-2110.html` | `/pl/dla-rodzicow/karta-ztm` |
| `/elegitymacja-4863.html` | `/pl/dla-rodzicow/e-legitymacja` |
| `/mlegitymacja-5140.html` | `/pl/dla-rodzicow/m-legitymacja` |
| `/chor_schelf-2478.html` | `/pl/dla-rodzicow/chor-schelf` |

### For Students (Dla Uczniów)

| Old URL | New URL |
|---------|---------|
| `/strefa_ucznia-2111.html` | `/pl/dla-uczniow` |
| `/strefa_ucznia-1369.html` | `/pl/dla-uczniow` |
| `/projekty-1417.html` | `/pl/dla-uczniow/projekty` |
| `/projekty-1371.html` | `/pl/dla-uczniow/projekty` |
| `/akademia_muzyczna_wbs-1831.html` | `/pl/dla-uczniow/akademia-muzyczna` |
| `/akademia_muzyczna-2112.html` | `/pl/dla-uczniow/akademia-muzyczna` |
| `/akademia_pilkarska_wbs-2158.html` | `/pl/dla-uczniow/akademia-pilkarska` |
| `/biblioteka-1433.html` | `/pl/dla-uczniow/biblioteka` |
| `/biblioteka-2113.html` | `/pl/dla-uczniow/biblioteka` |
| `/nauczyciel_zaufania-1486.html` | `/pl/dla-uczniow/nauczyciel-zaufania` |
| `/nauczyciel_zaufania-2115.html` | `/pl/dla-uczniow/nauczyciel-zaufania` |
| `/nasze_osiagniecia-4024.html` | `/pl/dla-uczniow/osiagniecia` |
| `/samorzad_uczniowski-4506.html` | `/pl/dla-uczniow/samorzad` |

### Documents

| Old URL | New URL |
|---------|---------|
| `/dokumenty-2099.html` | `/pl/dokumenty` |
| `/dokumenty-1446.html` | `/pl/dokumenty` |
| `/program_szkoly_wbs-3831.html` | `/pl/dokumenty/program-szkoly` |
| `/pion_polskojezyczny-4168.html` | `/pl/dokumenty/pion-polskojezyczny` |
| `/koncepcja_cyfryzacji_wbs-4737.html` | `/pl/dokumenty/koncepcja-cyfryzacji` |
| `/standardy_ochrony_maloletnich-4808.html` | `/pl/dokumenty/standardy-ochrony` |
| `/koncept_interwencji_w_sytuacji_mobingu-5026.html` | `/pl/dokumenty/antybullying` |
| `/drogi_komunikacji-5027.html` | `/pl/dokumenty/drogi-komunikacji` |
| `/nasze_certyfikaty-3399.html` | `/pl/dokumenty/certyfikaty` |

### Jobs & Contact

| Old URL | New URL |
|---------|---------|
| `/oferty_pracy_i_praktyk_-2103.html` | `/pl/praca` |
| `/oferty_pracy_i_praktyk-1473.html` | `/pl/praca` |
| `/kontakt-1385.html` | `/pl/kontakt` |
| `/kontakt-1420.html` | `/pl/kontakt` |
| `/impressum-2760.html` | `/pl/impressum` |
| `/mapa_strony-1434.html` | `/pl/mapa-strony` |

### Special Pages

| Old URL | New URL |
|---------|---------|
| `/ogloszenia_zapytania_ofertowe-3933.html` | `/pl/ogloszenia` |
| `/flash_news_zarzadu_nts-2451.html` | `/pl/aktualnosci/flash-news` |

---

## URL Structure Diagram

```
/pl                          # Homepage (Polish)
├── aktualnosci              # News listing
│   └── {slug}               # Individual article
├── wydarzenia
│   └── nadchodzace          # Upcoming events
├── archiwum                 # Archive by year
│   └── {year}               # e.g., 2023-24
├── o-szkole                 # About school
│   ├── misja                # Mission
│   ├── patron               # Patron (Willy Brandt)
│   ├── organ-prowadzacy     # Organ prowadzący
│   └── partnerzy            # Partners & sponsors
├── kadra                    # Staff directory
├── rekrutacja               # Admissions
├── dla-rodzicow             # For Parents
│   ├── formularze           # Forms
│   ├── regulaminy           # Regulations
│   ├── stolowka             # Canteen
│   ├── swietlica            # Aftercare
│   ├── rada-rodzicow        # Parents Council
│   ├── ferie                # Holidays
│   ├── dzwonki              # School bell times
│   ├── karta-ztm            # ZTM card info
│   ├── e-legitymacja        # E-student card
│   └── m-legitymacja        # Mobile student card
├── dla-uczniow              # For Students
│   ├── projekty             # Projects
│   ├── akademia-muzyczna    # Music Academy
│   ├── akademia-pilkarska   # Football Academy
│   ├── biblioteka           # Library
│   ├── nauczyciel-zaufania  # Trusted teacher
│   ├── osiagniecia          # Achievements
│   └── samorzad             # Student council
├── dokumenty                # Documents
│   ├── program-szkoly       # School program
│   ├── pion-polskojezyczny  # Polish section
│   ├── koncepcja-cyfryzacji # Digital concept
│   ├── standardy-ochrony    # Child protection
│   ├── antybullying         # Anti-bullying
│   └── certyfikaty          # Certificates
├── praca                    # Job offers
├── kontakt                  # Contact
├── ogloszenia               # Announcements
├── mapa-strony              # Sitemap
└── impressum                # Legal info

/de                          # German version
├── aktuelles                # News
├── veranstaltungen          # Events
├── archiv                   # Archive
├── ueber-uns                # About us
├── personal                 # Staff
├── anmeldung                # Admissions
├── fuer-eltern              # For parents
├── fuer-schueler            # For students
├── dokumente                # Documents
├── karriere                 # Careers
├── kontakt                  # Contact
└── impressum                # Legal

/en                          # English version
├── news                     # News
├── events                   # Events
├── archive                  # Archive
├── about                    # About
├── staff                    # Staff
├── admissions               # Admissions
├── for-parents              # For parents
├── for-students             # For students
├── documents                # Documents
├── careers                  # Careers
├── contact                  # Contact
└── legal                    # Legal
```

---

## Article URL Slug Generation

### Rules:
1. Convert to lowercase
2. Replace spaces and underscores with hyphens
3. Remove Polish diacritics (optional - can keep for SEO)
4. Remove special characters except hyphens
5. Limit to 60 characters
6. Ensure uniqueness with ID suffix if needed

### Examples:

| Original Title | Slug |
|----------------|------|
| "Kolejna radiowa przygoda naszych uczniów" | `kolejna-radiowa-przygoda-naszych-uczniow` |
| "Sukces uczniów WBS w konkursie chemicznym" | `sukces-uczniow-wbs-w-konkursie-chemicznym` |
| "🐾 Koty z Promyka" | `koty-z-promyka` |

---

## Redirect Strategy

### 301 Permanent Redirects (SEO juice preserved)
- All old `.html` URLs → new clean URLs
- Category consolidation (e.g., `/aktualnosci-1338.html` + `/aktualne_wydarzenia-1339.html` → `/pl/aktualnosci`)

### 302 Temporary Redirects (for A/B testing)
- Language detection on root `/`

### Implementation Files:
- `next.config.js` - Next.js redirects
- `.htaccess` - Apache server
- `nginx.conf` - Nginx server
- `vercel.json` - Vercel deployment

---

## Files Generated
1. ✅ `next.config.redirects.js` - Next.js config
2. ✅ `.htaccess` - Apache rules
3. ✅ `nginx-redirects.conf` - Nginx rules
4. ✅ `vercel.json` - Vercel config
5. ✅ `redirect-mapping.csv` - Review spreadsheet
