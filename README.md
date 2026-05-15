# Yoink — copy any web element for AI · Free Chrome extension

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-d4af7a?style=flat-square)](https://timurarslanov94.github.io/yoink/) [![License](https://img.shields.io/badge/license-Proprietary-d4af7a?style=flat-square)](LICENSE) [![Languages](https://img.shields.io/badge/i18n-10%20languages-d4af7a?style=flat-square)](_locales/)

**Yoink** is a free Chrome browser extension that lets developers and designers **copy any UI element** from any website — HTML, CSS, Tailwind classes, JSX, fonts, asset URLs, screenshots — and **paste straight into Claude or ChatGPT** for pixel-perfect AI reproduction.

> _Keywords: copy CSS from website · inspect element Chrome extension · CSS to Tailwind converter · extract CSS for AI · ChatGPT clone website · Claude design recreation · screenshot DOM element · CSS Peeper alternative · CSS Scan alternative · VisBug alternative_

Hover, click, copy — HTML, CSS, Tailwind, JSX, fonts, screenshots, and a recursive deep-CSS dump of the whole subtree, all bundled with a prompt that tells the AI to recreate the element exactly.

**100% free, forever — no paywall, no premium tier, no ads, no accounts.**

## Features

- 🎯 **Inspector mode** — hover to highlight any element, click to lock
- 📋 **Copy for AI** — one click → HTML + Deep CSS + states + animations + fonts + assets + CSS vars in clipboard, with a prompt header instructing the AI to reproduce 1:1
- 🖼 **Element screenshot** — clean PNG of just the selected element (no overlay)
- 📄 **Whole-page screenshot** — scroll-stitched full page with sticky-header de-duplication
- 🌳 **Deep CSS** — recursive subtree dump (60-node cap) — solves the "header looks wrong because nested CSS missing" problem
- 🎨 **Tailwind converter** — maps computed styles to Tailwind v3 classes
- ⚛️ **JSX export** — HTML → React JSX with proper camelCase
- ♿ **A11y** — role, aria, WCAG contrast ratio, focusable check
- 🔠 **Fonts** — detected `@font-face` URLs, Google Fonts suggestions
- 🎨 **Palette** — unique colors in the subtree
- 🌐 **i18n** — 10 languages (EN, RU, ES, ZH, JA, DE, FR, PT, KO, IT)
- 🌙 **Themes** — Graphite (dark) / Stone (light)

## Install (Developer mode)

1. `chrome://extensions` → enable Developer mode (top right)
2. Click **Load unpacked** → select this folder
3. Pin the extension from the puzzle-piece menu
4. Click the icon → floating widget appears in the bottom-right
5. Click the widget once → inspector activates → hover and click any element

## Permissions explained

- `activeTab` — read the current tab's DOM only when you click the icon
- `scripting` — inject the inspector into the page
- `clipboardWrite` — copy bundles and PNGs
- `storage` — remember your theme, language, and FAB position
- `<all_urls>` — required for `chrome.tabs.captureVisibleTab` (screenshot feature) and for the inspector to work on any site

No data leaves your browser. No telemetry. No accounts.

## Privacy

- Bundles include only what's rendered on the page you inspect.
- Whole-page bundle shows a confirmation prompt before copying when the page has form inputs or stored data, because the DOM may include CSRF tokens or other sensitive values.
- Cookies and localStorage are **never** included in any bundle.

## Author

Built by **Timur Arslanov**.  
Instagram: [@arslanov.tim](https://instagram.com/arslanov.tim)  
Telegram: [@yourself_realize](https://t.me/yourself_realize)

## License

**Proprietary — All Rights Reserved.** Copyright © 2026 Timur Arslanov.

You are free to install and use Yoink for personal or commercial purposes at no cost. You may **not** modify the source code, redistribute it, publish derivatives on extension marketplaces, or remove author credits. See [LICENSE](LICENSE) for full terms.

For commercial licensing or permission requests — DM [@arslanov.tim](https://instagram.com/arslanov.tim) on Instagram or [@yourself_realize](https://t.me/yourself_realize) on Telegram.
