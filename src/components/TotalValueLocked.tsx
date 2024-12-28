import { useState } from 'react';

const TotalValueLocked = () => {
  const [tvlValue, setTvlValue] = useState<number>(0);  // or receive as prop

  const formatTVL = (value: number | undefined) => {
    if (!value || isNaN(value)) return '$0';
    const billion = value / 1e9;
    return `$${billion.toFixed(2)}B`;
  }

  return (
    <span>
      {formatTVL(tvlValue)}
    </span>
  );
}

export default TotalValueLocked; 