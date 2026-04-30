# Copilot instructions for this repository

Purpose
- Short guide to help Copilot sessions understand and work in this repo.

Build / Test / Lint
- No build, test, or lint scripts detected (no package.json or CI workflows).
- Project is a static HTML site: open index.html in a browser to run.
- If tests are later added (example: Jest), run a single test with:
  - 
px jest path/to/test.file.test.js (single test file)

High-level architecture
- Single-page static site using HTML/CSS/JavaScript.
- Entry point: index.html (lang="es").
- Asset folder: img/ (contains imgenen.jpeg).
- README.md references css/ and js/ directories; they are the expected locations for styles and scripts if added.
- Bootstrap is loaded from CDN in the HTML (no package manager present).

Key conventions
- Keep images in img/.
- Use index.html as root entry; additional pages should follow the same structure.
- Content language is Spanish; file names use lowercase and simple extensions.
- No JS build or bundler currently configured—add package.json and CI if adopting Node toolchain.

Integration notes
- No AI assistant config files found (CLAUDE.md, .cursorrules, AGENTS.md, etc.).
- If adding CI, place workflows under .github/workflows/.

If you want, Copilot sessions can be configured to run browser-based end-to-end tests. Would you like an MCP server configured for Playwright or similar?

##MANDATORY INSTRUCTIONS
-Hablame en español,por favor. No quiero que me hables en ingles

## Recomendaciones
- Cada vez que ingreses un nuevo código, inserta un comentario en español que explique las etiquetas utilizadas
- los ejemplos y el contenido en general necesito que esten en español
