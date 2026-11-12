# Solar System Interactive Rebuild

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/solar-system-interactive-rebuild/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable recreation of the supplied video: a dark solar-system visualization with orbit rings, a vertical planet selector and an information panel.

## Run locally

No npm packages or build tools required.

```bash
cd solar-system-interactive-rebuild
python -m http.server 8000
```

Visit http://localhost:8000.

## Project files

- `index.html` — solar system structure, planet controls and facts panel
- `style.css` — dark astronomy theme, orbit rings, planet visuals, subtle orbit animations and responsive layout
- `script.js` — selection state and planet information

## Features

- Sun and eight planets
- Click a planet in the diagram or the list
- Planet class, diameter, day, year, moon count and average distance
- CSS orbital motion and hover focus styling
- Mobile and desktop layouts

## Accuracy

The supplied video shows only partial HTML/CSS snippets at small size. This is a complete reconstruction of the visible design and interaction, not a verbatim copy of the creator's full CodePen. Planet sizes and orbit distances are illustrative and not to scale; astronomical values are approximate.
