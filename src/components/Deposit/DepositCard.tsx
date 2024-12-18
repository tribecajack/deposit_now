import React, { useState } from 'react';
import { Settings2, Wallet, ChevronDown } from 'lucide-react';
import TokenSelector from './TokenSelector';

const DepositCard = () => {
  const [amount, setAmount] = useState('');
  const [selectedAction, setSelectedAction] = useState('Deposit');
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState({
    symbol: 'SOL',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
  });

  const actions = ['Deposit', 'Withdraw', 'Repay'];

  return (
    <div className="w-[320px] glass-effect rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <button 
            onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
            className="flex items-center gap-1 text-lg font-bold text-white hover:opacity-80 focus:bg-white/20 active:bg-white/20 p-1.5 rounded-lg"
          >
            {selectedAction}
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isActionMenuOpen && (
            <div className="absolute top-full left-0 mt-1 w-32 bg-[#1a1a1a] rounded-lg shadow-lg border border-white/10 py-1 z-10">
              {actions.map((action) => (
                <button
                  key={action}
                  className="w-full px-3 py-2 text-left text-white hover:bg-white/20 focus:bg-white/20 active:bg-white/20 text-sm"
                  onClick={() => {
                    setSelectedAction(action);
                    setIsActionMenuOpen(false);
                  }}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="p-1.5 hover:bg-white/5 rounded-lg">
          <Settings2 className="w-4 h-4 text-white/60" />
        </button>
      </div>

      <div className="bg-white/5 rounded-lg p-4">
        <div className="flex justify-between mb-3">
          <TokenSelector 
            tokenSymbol={selectedToken.symbol}
            tokenIcon={selectedToken.icon}
            onSelect={setSelectedToken}
          />
          <span className="text-xs text-white/60">Balance: 0</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-xs text-white/60">Amount</span>
          <input
            type="text"
            className="flex-1 bg-transparent text-right text-lg outline-none text-white"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-3 p-3 bg-white/5 rounded-lg">
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Current APY</span>
          <span className="text-green-400">5.2%</span>
        </div>
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5">
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </button>
    </div>
  );
};

export default DepositCard;