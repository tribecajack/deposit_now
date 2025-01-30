import React from 'react';
import StatsCard from './StatsCard';

import { useState, useEffect } from 'react';

// Define the type for TVL data
interface TvlData {
  [key: string]: number;
}

// Modifier la fonction extractTvl pour gérer tous les providers avec structure de réserves
const extractTvl = (data: any, url: string) => {
  // Vérifier tous les identifiants de provider qui utilisent la structure 'reserves'
  const reserveProviders = [
    'MFv2hWf31Z9kbCa1snEPYctwafyhdvnV7FZnsebVacA', // Marginfi
    '4UpD2fh7xH3VP9QQaXtsS1YY3bxzWhtfpks7FatyKvdY', // Solend
    '7u3HeHxYDLhnCoErrtycNokbQYbWGzLs6JSDqGAv5PfF'  // Kamino
  ];

  if (reserveProviders.some(id => url.includes(id))) {
    return data.reserves?.reduce((sum: number, reserve: any) => sum + (reserve.tvl || 0), 0) || 0;
  }
  
  // Cas standard pour les autres providers
  return data.tvl || data.result?.tvl || data.total || 0;
};

const StatsSection = () => {
  // Update state type to number
  const [tvl, setTvl] = useState<number | null>(null);

  useEffect(() => {
    const fetchTvl = async () => {
      try {
        const providers = [
          import.meta.env.VITE_PROVIDER_SOLEND,
          import.meta.env.VITE_PROVIDER_MARGINFI,
          import.meta.env.VITE_PROVIDER_KAMINO
        ].filter(Boolean);

        if (providers.length === 0) {
          throw new Error('No provider endpoints defined in environment variables');
        }

        // Fetch TVL from all providers and sum
        const tvlValues = await Promise.all(
          providers.map(async (url) => {
            try {
              const response = await fetch(url!);
              const data = await response.json();
              const tvlValue = extractTvl(data, url);
              console.log(`TVL from ${url}:`, tvlValue);
              return Number(tvlValue);
            } catch (error) {
              console.error(`Error with ${url}:`, error);
              return 0;
            }
          })
        );

        const totalTvl = tvlValues.reduce((sum, value) => sum + value, 0);
        setTvl(totalTvl);

      } catch (error) {
        console.error('Error fetching TVL:', error);
        setTvl(0);
      }
    };

    fetchTvl();
  }, []);

  return (
    <section className="w-full max-w-3xl mx-auto mb-8 px-4">
      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Total Value Locked" value={tvl !== null ? `$${(tvl / 1e6).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M` : 'Loading...'} />
        <StatsCard title="24h Volume" value="$24.8M" />
        <StatsCard title="Total Deposits" value="1.2M" />
      </div>
    </section>
  );
};

export default StatsSection;