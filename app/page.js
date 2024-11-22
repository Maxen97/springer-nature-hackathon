'use client';
import { useState, useEffect } from 'react';
import { loadXMLFiles, parseXMLFile } from './lib/xmlUtils';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchXMLData() {
      const xmlFiles = await loadXMLFiles();
      const parsedCards = xmlFiles.map(file => ({
        name: file.name,
        ...parseXMLFile(file.content)
      }));
      setCards(parsedCards);
      setLoading(false);
    }
    fetchXMLData();
  }, []);

  const handleCardClick = (fileName) => {
    router.push(`/view/${encodeURIComponent(fileName)}`);
  };

  const styles = {
    container: { padding: '20px', maxWidth: '1200px', margin: '0 auto' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px'
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      ':hover': { transform: 'scale(1.02)' }
    }
  };

  if (loading) return <div style={styles.container}>Loading...</div>;

  return (
    <main style={styles.container}>
      <div style={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} style={styles.card} onClick={() => handleCardClick(card.name)}>
            <h2>{card.name}</h2>
            <p>{card.preview}</p>
          </div>
        ))}
      </div>
    </main>
  );
}