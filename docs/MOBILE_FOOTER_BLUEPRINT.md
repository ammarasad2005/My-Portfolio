# Mobile Footer Structural Wireframe Blueprint (<640px)

This document presents the compact structural blueprint for the **mobile viewport footer only**. Desktop and Tablet footer structures remain unchanged.

---

```
+-----------------------------------------------------------------------------------+
|                            MOBILE FOOTER (<640px)                                 |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  LEVEL 1: VIRTUAL 2-COLUMN SPLIT (grid-cols-2 gap-3)                              |
|  +---------------------------------------+ +-----------------------------------+  |
|  | LEFT COLUMN (BRAND & SOCIALS)         | | RIGHT COLUMN (DESK SKETCH CARD)   |  |
|  | Logo: A.                              | | +-------------------------------+ |  |
|  |                                       | | | [Tape Clip on Top-Left Corner]| |  |
|  | Tagline:                              | | |                               | |  |
|  | "Building digital products that make  | | |      CONTRACTED DESK SKETCH    | |  |
|  |  lives easier. One line of code at    | | |        ILLUSTRATION FRAME     | |  |
|  |  a time."                             | | |                               | |  |
|  |                                       | | +-------------------------------+ |  |
|  | Social Icons Row:                     | |                                   |  |
|  | (GH) (LI) (TW) (Mail)                 | |                                   |  |
|  +---------------------------------------+ +-----------------------------------+  |
|                                                                                   |
|  ==================== VIRTUAL HORIZONTAL BOUNDARY (Max Depth) =====================  |
|                                                                                   |
|  LEVEL 2: VIRTUAL 4-COLUMN GRID (grid-cols-4 gap-2 sm:gap-3)                      |
|  +---------------------------------------+ +-----------------+ +---------------+  |
|  | COLS 1 & 2 (GET IN TOUCH - 2 COLS)     | | COL 3 (NAV)     | | COL 4 (RES)   |  |
|  | Header: GET IN TOUCH                  | | Header: NAV   | | Header: RES   |  |
|  | "Let's collaborate..."                | | • Home        | | • Resume PDF  |  |
|  | [ Start Conversation -> ]             | | • About       | | • GitHub      |  |
|  | +-----------------------------------+ | | • Projects    | | • Projects    |  |
|  | | Sticky Note: Thanks for... 😊    | | | • Experience  | | • Tech Stack  |  |
|  | +-----------------------------------+ | | • Contact     | |               |  |
|  +---------------------------------------+ +-----------------+ +---------------+  |
|                                                                                   |
|  =================================================================================  |
|  © 2024 Ammar Asad. All rights reserved.           Built with Next.js & Tailwind  |
+-----------------------------------------------------------------------------------+
```

---

## 📐 Detailed Structural Breakdown

### 1. Level 1: Virtual 2-Column Split (`grid-cols-2 gap-3.5`)
- **Left Column (Col 1):**
  - Brand Logo `A.`
  - Tagline text constrained to 50% width, allowing text to wrap into a compact block.
  - Social icons row (GitHub, LinkedIn, Twitter, Email).
- **Right Column (Col 2):**
  - Contracted Desk Sketch Card (`max-w-[150px]` or `w-full h-[160px]`).
  - Adhesive tape placed on the **top-left corner**.
  - Tighter inner padding to fit perfectly inside the right 50% column width.

### 2. Virtual Horizontal Boundary
- The grid naturally calculates the taller column (whichever extends further downward) and forms the bottom edge for Level 1.

### 3. Level 2: Virtual 4-Column Grid (`grid-cols-4 gap-2 sm:gap-3`)
- **Columns 1 & 2 (`col-span-2`): GET IN TOUCH**
  - Header: `GET IN TOUCH`
  - Text: *"Let's collaborate..."*
  - CTA Button: `[ Start a Conversation -> ]`
  - Sticky Note: *"Thanks for stopping by! 😊"*
- **Column 3 (`col-span-1`): NAVIGATION**
  - Header: `NAVIGATION`
  - Vertical link list: *Home, About, Projects, Experience, Contact*
- **Column 4 (`col-span-1`): RESOURCES**
  - Header: `RESOURCES`
  - Vertical link list: *Resume (PDF), GitHub, Projects, Tech Stack*

---

*Please review this blueprint and let me know if you approve or would like any adjustments before applying changes!*
