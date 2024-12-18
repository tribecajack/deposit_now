import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Token {
  symbol: string;
  icon: string;
}

const tokens: Token[] = [
  {
    symbol: 'SOL',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
  },
  {
    symbol: 'USDC',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png'
  }
];

interface TokenSelectorProps {
  tokenSymbol: string;
  tokenIcon: string;
  onSelect?: (token: Token) => void;
}

const TokenSelector = ({ tokenSymbol, tokenIcon, onSelect }: TokenSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/5"
      >
        <img src={tokenIcon} alt={tokenSymbol} className="w-5 h-5" />
        <span className="text-white">{tokenSymbol}</span>
        <ChevronDown className="w-4 h-4 text-white/60" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-32 bg-[#1a1a1a] rounded-lg shadow-lg border border-white/10 py-1 z-20">
          {tokens.map((token) => (
            <button
              key={token.symbol}
              className="w-full px-3 py-2 flex items-center gap-2 hover:bg-white/5"
              onClick={() => {
                onSelect?.(token);
                setIsOpen(false);
              }}
            >
              <img src={token.icon} alt={token.symbol} className="w-5 h-5" />
              <span className="text-white text-sm">{token.symbol}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenSelector;