export function xmlParser(xmlContent) {
    // Parse the XML string into a DOM object
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlContent, "application/xml");
  
    // Check for XML parsing errors
    if (xmlDoc.querySelector("parsererror")) {
      console.error("Error parsing XML");
    } else {
      // Start building the HTML
      let html = "<div>";
  
      html += parseTitle(xmlDoc);
      html += parseChapter(xmlDoc);
  
      html += "</div>";
  
      return html;
    }
  }
  
  function parseTitle(xmlDoc) {
    const title = xmlDoc.querySelector("title")?.textContent;
    const html = `<h1>${title}</h1>`;
    return html;
  }
  
  function parseChapter(xmlDoc) {
    const chapters = xmlDoc.querySelectorAll("chapter");
    let html = "";
    chapters.forEach((chapter) => {
      const chapterTitle = chapter.getAttribute("title");
      html += `<h3>${chapterTitle}</h3>`;
  
      // Iterate through child nodes to maintain order
      chapter.childNodes.forEach((node) => {
        if (node.nodeName === "paragraph") {
          html += `<p>${node.textContent}</p>`;
        } else if (node.nodeName === "interactive") {
          html += `<div class="interactive">
          <DicomViewer/></div>`;
        }
      });
    });
    return html;
  }
  
  function parseInteractive(node) {
    console.log("Not yet implemented");
  }