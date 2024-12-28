const formatTVL = (value: number | undefined) => {
  if (!value || isNaN(value)) return '$0';
  
  const billion = value / 1e9;
  return `$${billion.toFixed(2)}B`;
}

// In your render/return:
<span>
  {formatTVL(tvlValue)}
</span> 