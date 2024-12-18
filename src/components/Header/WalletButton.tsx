import React from 'react';
import { Wallet } from 'lucide-react';

interface WalletButtonProps {
  walletAddress: string | null;
}

const WalletButton: React.FC<WalletButtonProps> = ({ walletAddress }) => (
  <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-green-400 text-sm font-medium text-white hover:opacity-90 transition-opacity">
    <Wallet className="w-4 h-4" />
    <span className="truncate max-w-[120px]">
    {walletAddress ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
    </span>
  </button>
);

export default WalletButton;