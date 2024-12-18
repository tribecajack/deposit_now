import React from 'react';
import StatsCard from './StatsCard';

const StatsSection = () => (
  <section className="w-full max-w-3xl mx-auto mb-8 px-4">
    <div className="grid grid-cols-3 gap-4">
      <StatsCard title="Total Value Locked" value="$142.5M" />
      <StatsCard title="24h Volume" value="$24.8M" />
      <StatsCard title="Total Deposits" value="1.2M" />
    </div>
  </section>
);

export default StatsSection;