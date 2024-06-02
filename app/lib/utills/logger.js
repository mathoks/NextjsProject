const { renderToHTML } = require("next/dist/server/render");

export async function renderComponentToString(component) {
    const html = await renderToHTML(component);
    return html;
  }
