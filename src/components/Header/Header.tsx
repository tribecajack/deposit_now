import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import WalletButton from './WalletButton';

const Header = () => (
  <header className="w-full py-4 px-6 glass-effect">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Logo />
      <div className="flex items-center gap-6">
        <Navigation />
        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-full bg-purple-900/30 text-purple-300 text-sm">
            Solana
          </div>
          <WalletButton />
        </div>
      </div>
    </div>
  </header>
);

export default Header;