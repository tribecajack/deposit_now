import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ajouter la configuration pour les variables d'environnement
interface ImportMeta {
  env: {
    VITE_API_BASE_URL: string;
    VITE_API_URL: string;
    VITE_PROVIDER_SOLEND: string;
    VITE_PROVIDER_MARGINFI: string;
    VITE_PROVIDER_KAMINO: string;
  };
}

// Exemple d'utilisation correcte dans un composant React :
/*
function TvlComponent() {
  const fetchTvlData = async () => {
    try {
      const [solend, marginfi, kaminio] = await Promise.all([
        fetch(import.meta.env.VITE_PROVIDER_SOLEND).then(r => r.json()),
        fetch(import.meta.env.VITE_PROVIDER_MARGINFI).then(r => r.json()),
        fetch(import.meta.env.VITE_PROVIDER_KAMINO).then(r => r.json())
      ]);
      
      // Traitement des données...
    } catch (error) {
      console.error("Error fetching TVL data:", error);
    }
  };

  return <button onClick={fetchTvlData}>Load TVL</button>;
}
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
