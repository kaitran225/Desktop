const cssFiles = [
  "../css/layout.css",
  "../css/logo.css",
  "../css/social.css",
  "../css/style.css",
  "../css/terminal.css",
  "../css/ticket.css",
  "../css/test.css",
];
const jsFiles = [
  "../js/perlin.js",
  "../js/ticket.js",
  "../js/pinit.js",
  "../js/tv.js",
  "../js/terminal.js",
  "../js/logo.js",

]
/**
 * Loads CSS files by creating link elements and appending them to the document head.
 *
 * @param {Array} cssFiles - An array of CSS file paths.
 * @return {void} No return value.
 */
function loadFiles() {
  jsFiles.forEach((jsFiles) => {
    const script = document.createElement('script');
    script.src = jsFiles;
    document.head.appendChild(script);
  });
  cssFiles.forEach((cssFile) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFile;
    document.head.appendChild(link);
  });
}
window.addEventListener("load", loadFiles);
