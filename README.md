# Website Application Development - Lab 1

This project is a website clone of **The Coffee House Vietnam** serving as the submission for Exercise 3. It correctly uses HTML5 semantics, iframe, media (images/video), links, full-featured form, and external CSS. 

---

## Site Map
The website consists of 5 functional pages:
1.  **Home (`index.html`)**
2.  **About Us (`about.html`)**
3.  **Stores (`stores.html`)**
4.  **Contact (`contact.html`)**
5.  **Policy (`policy.html`)**

---

## Features

### 1. HTML & Structure
*   **Semantic Tags**: Used `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` throughout the project.
*   **Media**: At least 5 images per page with descriptive `alt` text and a responsive YouTube `iframe` on the About page.
*   **Internal Links**: Used HTML anchors (`#id`) with `scroll-margin-top` for smooth navigation between the Home and About pages.

### 2. CSS & Styling
*   **Modern Layouts**: Leveraged **Flexbox** for alignment and **CSS Grid** for store listings.
*   **Responsive Design**: Implemented a comprehensive breakpoint at **768px** to ensure the site is fully usable on mobile devices.
*   **Interactive States**: Sticky navigation bar with transparency-to-white hover transitions and black/white logo swapping.
*   **Visual Polish**: Used linear gradients and absolute positioning for stickers/bubbles.

### 3. Full-Featured Form
The form on the Contact page includes:
*   **All Required Types**: text, email, tel, password, number, date, range, color, file, radio, checkbox, and select.
*   **Advanced Logic**: A `select` dropdown using `<optgroup>` to organize districts by city.
*   **Validation**: Real-time feedback using HTML5 `pattern` (10-digit phone), `required`, and `min/max` attributes.

### 4. JavaScript Interactions
*   **Sticky Logic**: Detects scroll position to toggle the `.scrolled` class on the header.
*   **Auto-Slider**: Managed a 2-image hero slider and a 7-second automatic info slider.

---

## How to Run
1.  **Download** the project ZIP file.
2.  **Extract** all folders (`assets/css`, `assets/js`, `assets/img`).
3.  Open **`index.html`** in any modern web browser (Chrome or Edge recommended).
4.  To test the mobile view, press **F12** and toggle the Device Toolbar.

---

## Folder Structure
```text
/ (root)
├── index.html
├── about.html
├── stores.html
├── contact.html
├── policy.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        └── (Contains all logo, banner, and product images)
```

---

## Credits
Concept & Assets: Inspired by [The Coffee House](https://thecoffeehouse.com).<br>
Author: Nguyễn Hưng - ITCSIU24030<br>
Course: Web Application Development (Lab 1)<br>
Instructor: Dr. Lê Duy Tân
