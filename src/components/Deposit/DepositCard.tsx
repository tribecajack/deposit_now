import React, { useState } from 'react';
import { Settings2, Wallet, ChevronDown } from 'lucide-react';
import TokenSelector from './TokenSelector';
// import { Connection } from '@solana/web3.js';

// interface DepositCardProps {
//   setWalletAddress: (address: string | null) => void;
//   walletAddress: string | null;
// }

const DepositCard= () => {
  const [amount, setAmount] = useState('');
  const [selectedAction, setSelectedAction] = useState('Deposit');
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState({
    symbol: 'SOL',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
  });

  const actions = ['Deposit', 'Withdraw', 'Repay'];

  // const handleConnectWallet = async () => {
  //   try {
  //     const { solana } = window as any;
      
  //     if (!solana?.isPhantom) {
  //       alert('Please install Phantom wallet');
  //       return;
  //     }

  //     // First connect to the wallet
  //     const response = await solana.connect();
      
  //     // Then establish the RPC connection
  //     const connection = new Connection(
  //       "https://mainnet.helius-rpc.com/?api-key=a4940974-a8b5-45bd-b48c-09b1f1ef8b02",
  //       'confirmed'
  //     );

  //     const publicKey = response.publicKey.toString();
  //     setWalletAddress(publicKey);
  //     console.log('Connected to wallet:', publicKey);
      
  //   } catch (error) {
  //     console.error('Error connecting wallet:', error);
  //     alert('Failed to connect wallet');
  //   }
  // };

  return (
    <div className="w-[320px] glass-effect rounded-xl p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <button 
            onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
            className="flex items-center gap-1 text-lg font-bold text-white hover:opacity-80"
          >
            {selectedAction}
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isActionMenuOpen && (
            <div className="absolute top-full left-0 mt-1 w-32 bg-[#1a1a1a] rounded-lg shadow-lg border border-white/10 py-1 z-10">
              {actions.map((action) => (
                <button
                  key={action}
                  className="w-full px-3 py-2 text-left text-white hover:bg-white/5 text-sm"
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
    </div>
  );
};

export default DepositCard;