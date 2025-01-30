async function fetchTvl() {
  try {
    const responses = await Promise.all([
      fetch(import.meta.env.VITE_PROVIDER_SOLEND, {
        headers: { 'Accept': 'application/json' }
      }),
      fetch(import.meta.env.VITE_PROVIDER_MARGINFI, {
        headers: { 'Accept': 'application/json' }
      }),
      fetch(import.meta.env.VITE_PROVIDER_KAMINO, {
        headers: { 'Accept': 'application/json' }
      })
    ]);

    for (const response of responses) {
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP ${response.status}: ${text}`);
      }
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Invalid content-type: ${contentType}\nResponse: ${text.slice(0, 100)}`);
      }
    }

    const data = await Promise.all(responses.map(r => r.json()));
    return data.flatMap(provider => provider.reserves.map(r => r.tvl));
  } catch (error) {
    console.error("TVL fetch error:", error);
    throw error;
  }
}

// Code temporaire pour debugger
async function debugEndpoints() {
  const urls = [
    import.meta.env.VITE_PROVIDER_SOLEND,
    import.meta.env.VITE_PROVIDER_MARGINFI,
    import.meta.env.VITE_PROVIDER_KAMINO
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      console.log(`Response from ${url}:`, text.slice(0, 200));
    } catch (error) {
      console.error(`Debug failed for ${url}:`, error);
    }
  }
}

// Appeler cette fonction au montage du composant 