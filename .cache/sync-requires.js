const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/amrschmitz/code/maisoncedric/.cache/dev-404-page.js"))),
  "component---src-pages-a-propos-js": hot(preferDefault(require("/Users/amrschmitz/code/maisoncedric/src/pages/a-propos.js"))),
  "component---src-pages-assises-js": hot(preferDefault(require("/Users/amrschmitz/code/maisoncedric/src/pages/assises.js"))),
  "component---src-pages-decoration-js": hot(preferDefault(require("/Users/amrschmitz/code/maisoncedric/src/pages/decoration.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/amrschmitz/code/maisoncedric/src/pages/index.js"))),
  "component---src-pages-luminaires-js": hot(preferDefault(require("/Users/amrschmitz/code/maisoncedric/src/pages/luminaires.js"))),
  "component---src-pages-mobilier-js": hot(preferDefault(require("/Users/amrschmitz/code/maisoncedric/src/pages/mobilier.js"))),
  "component---src-pages-produit-js": hot(preferDefault(require("/Users/amrschmitz/code/maisoncedric/src/pages/produit.js")))
}

