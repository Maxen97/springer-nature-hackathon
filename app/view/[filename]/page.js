'use client';
import { useEffect, useState } from 'react';
import { parseXMLFile } from '/app/lib/xmlUtils';

function RenderXMLContent({ node }) {
  if (!node) return null;

  const components = {
    'chapter-heading': 'h1',
    'section-heading': 'h2',
    'subsection-heading': 'h3',
    'paragraph': 'p',
    'list': 'ul',
    'list-item': 'li',
    'document': 'div',
    'preview': 'div'
  };

  const Element = components[node.nodeName.toLowerCase()] || 'div';
  
  // Handle text nodes
  if (node.nodeType === 3) {
    return node.textContent;
  }

  // Handle element nodes
  if (node.nodeType === 1) {
    const children = Array.from(node.childNodes).map((child, index) => (
      <RenderXMLContent key={index} node={child} />
    ));

    return <Element>{children}</Element>;
  }

  return null;
}

export default function ViewXML({ params }) {
  const [xmlContent, setXmlContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadXMLContent() {
      try {
        const response = await fetch(`/view/${params.filename}`);
        const { content } = await response.json();
        
        // Parse XML string into DOM
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(content, 'text/xml');
        
        setXmlContent(xmlDoc.documentElement);
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false);
    }
    loadXMLContent();
  }, [params.filename]);

  if (loading) return <div>Loading...</div>;
  if (!xmlContent) return <div>File not found</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <RenderXMLContent node={xmlContent} />
    </div>
  );
}