import React from 'react';
import StatsCard from './StatsCard';

import { useState, useEffect } from 'react';

// Define the type for TVL data
interface TvlData {
  [key: string]: number;
}

const StatsSection = () => {
  // Update state type to number
  const [tvl, setTvl] = useState<number | null>(null);

  useEffect(() => {
    const fetchTvl = async () => {
      try {
        const response = await fetch('/api/tvl', {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        const data = await response.json() as TvlData;
        const totalTvl = Object.values(data).reduce((sum: number, value: number) => sum + value, 0);
        setTvl(totalTvl);
      } catch (error) {
        console.error('Error fetching TVL:', error);
        setTvl(0); // Set a fallback value on error
      }
    };

    fetchTvl();
  }, []);

  return (
    <section className="w-full max-w-3xl mx-auto mb-8 px-4">
      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Total Value Locked" value={tvl !== null ? `$${(tvl / 1e6).toFixed(1)}M` : 'Loading...'} />
        <StatsCard title="24h Volume" value="$24.8M" />
        <StatsCard title="Total Deposits" value="1.2M" />
      </div>
    </section>
  );
};

export default StatsSection;