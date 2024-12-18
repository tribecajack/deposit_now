import React from 'react';
import Header from './components/Header/Header';
import DepositCard from './components/Deposit/DepositCard';
import StatsSection from './components/Stats/StatsSection';
import Gradient from './components/Gradient';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Gradient />
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {/* Add your title text here */}
          </h1>
          <DepositCard />
        </div>
      </main>
      <StatsSection />
    </div>
  );
}

export default App;