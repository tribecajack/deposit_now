import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import WalletButton from './WalletButton';

// interface HeaderProps {
//   walletAddress: string | null;
//   setWalletAddress: (address: string | null) => void;
//   onDisconnect: () => void;
// }

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <WalletButton />
        </div>
      </div>
    </header>
  );
};

export default Header;