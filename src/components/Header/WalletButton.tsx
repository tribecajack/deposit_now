import React, { useState } from 'react';
import { Wallet, ChevronDown } from 'lucide-react';
import { Connection } from '@solana/web3.js';

const WalletButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const handleConnectWallet = async () => {
    try {
      const { solana } = window as any;
      
      if (!solana?.isPhantom) {
        alert('Please install Phantom wallet');
        return;
      }

      const response = await solana.connect();
      
      const connection = new Connection(
        "https://mainnet.helius-rpc.com/?api-key=a4940974-a8b5-45bd-b48c-09b1f1ef8b02",
        'confirmed'
      );

      const publicKey = response.publicKey.toString();
      setWalletAddress(publicKey);
      console.log('Connected to wallet:', publicKey);
      
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet');
    }
  };

  const handleDisconnect = () => {
    const { solana } = window as any;
    if (solana) {
      solana.disconnect();
      setWalletAddress(null);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={walletAddress ? () => setIsDropdownOpen(!isDropdownOpen) : handleConnectWallet}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        <Wallet className="w-4 h-4" />
        {walletAddress ? (
          <>
            <span className="hidden sm:inline">{formatAddress(walletAddress)}</span>
            <ChevronDown className="w-4 h-4" />
          </>
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      {isDropdownOpen && walletAddress && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a1a] rounded-lg shadow-lg border border-white/10 py-1 z-50">
          <div className="px-4 py-2 border-b border-white/10">
            <p className="text-xs text-white/60">Connected as</p>
            <p className="text-sm text-white truncate">{walletAddress}</p>
          </div>
          <button
            onClick={handleConnectWallet}
            className="w-full px-4 py-2 text-left text-white hover:bg-white/5 text-sm"
          >
            Change Wallet
          </button>
          <button
            onClick={handleDisconnect}
            className="w-full px-4 py-2 text-left text-white hover:bg-white/5 text-sm"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletButton;