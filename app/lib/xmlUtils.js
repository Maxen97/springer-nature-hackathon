// src/lib/xmlUtils.js

export async function loadXMLFiles() {
    try {
      const response = await fetch('/api/xml');
      const xmlList = await response.json();
      return xmlList;
    } catch (error) {
      console.error('Error loading XML files:', error);
      return [];
    }
  }
  
  export function parseXMLString(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
    // Basic preview for cards
    const preview = xmlDoc.querySelector('preview')?.textContent || '';
    
    // Full content parsing
    const content = parseXMLNode(xmlDoc.documentElement);
    
    return {
      preview,
      content
    };
  }
  
  function parseXMLNode(node) {
    // Skip text nodes and comments
    if (node.nodeType !== 1) return null;
  
    const tagMapping = {
      'chapter-heading': 'h1',
      'section-heading': 'h2',
      'subsection-heading': 'h3',
      'paragraph': 'p',
      'list': 'ul',
      'list-item': 'li',
      'emphasis': 'em',
      'strong': 'strong',
      'quote': 'blockquote',
      'code': 'pre',
      // Add more mappings as needed
    };
  
    const element = {
      type: tagMapping[node.tagName.toLowerCase()] || 'div',
      content: node.childNodes.length === 1 && node.firstChild.nodeType === 3 
        ? node.textContent
        : Array.from(node.childNodes)
            .map(child => parseXMLNode(child))
            .filter(Boolean)
    };
  
    // Add any attributes from the XML
    if (node.attributes && node.attributes.length > 0) {
      element.attributes = {};
      Array.from(node.attributes).forEach(attr => {
        element.attributes[attr.name] = attr.value;
      });
    }
  
    return element;
  }
  
  export function parseXMLFile(fileContent) {
    try {
      return parseXMLString(fileContent);
    } catch (error) {
      console.error('Error parsing XML file:', error);
      return null;
    }
  }