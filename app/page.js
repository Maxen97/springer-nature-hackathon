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
    /* router.push("/viewbackup"); */
  };

  const styles = {
    // Phone frame styles
    phoneContainer: {
      position: 'relative',
      maxWidth: '600px',
      height: '90vh',
      margin: '20px auto',
      borderRadius: '40px',
      border: '16px solid #000',
      backgroundColor: '#000',
      boxShadow: '0 0 20px rgba(0,0,0,0.2)',
      overflow: 'hidden',
    },
    phoneSpeaker: {
      position: 'absolute',
      top: '0',
      width: '150px',
      height: '30px',
      background: '#000',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '2',
    },
    phoneContent: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      overflow: 'auto',
    },
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
    },
    searchContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
    },
    searchBar: {
      display: "flex",
      alignItems: "center",
      maxWidth: "500px",
      width: "100%",
    },
    searchInput: {
      flex: 1,
      padding: "12px 20px",
      border: "2px solid #ddd",
      borderRadius: "25px",
      fontSize: "24px",
      transition: "all 0.3s ease",
      outline: "none",
    }
  };

  if (loading) return <div style={styles.container}>Loading...</div>;

  return (
    <div style={styles.phoneContainer}>
      <div style={styles.phoneSpeaker}></div>
      <div style={styles.phoneContent}>
        <main style={styles.container}>
          <div style={styles.searchContainer}>
            <div style={styles.searchBar}>
              <input type="text" style={styles.searchInput} placeholder="Search..."></input>
            </div>
          </div>

          <div style={styles.grid}>
            {cards.map((card, index) => (
              <div key={index} style={styles.card} onClick={() => handleCardClick(card.name)}>
                <h2>{card.name}</h2>
                <p>{card.preview}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}