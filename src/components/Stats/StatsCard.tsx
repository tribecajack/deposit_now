import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard = ({ title, value }: StatsCardProps) => (
  <div className="glass-effect rounded-xl p-4">
    <h3 className="text-white/60 text-xs mb-1">{title}</h3>
    <p className="text-xl font-bold text-white">{value}</p>
  </div>
);

export default StatsCard;