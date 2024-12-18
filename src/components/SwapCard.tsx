import React, { useState } from 'react';
import { Settings2, ArrowDownUp, ChevronDown, Wallet } from 'lucide-react';

const SwapCard = () => {
  const [amount, setAmount] = useState('');

  return (
    <div className="w-[440px] bg-white rounded-2xl shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Swap</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* From Token */}
      <div className="bg-gray-50 rounded-xl p-4 mb-2">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-500">You pay</span>
          <span className="text-sm text-gray-500">Balance: 0</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border hover:border-blue-500 focus:bg-gray-50 active:bg-gray-50">
            <img
              src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
              alt="SOL"
              className="w-6 h-6 rounded-full"
            />
            <span>SOL</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <input
            type="text"
            className="flex-1 bg-transparent text-right text-xl outline-none"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center -my-2 relative z-10">
        <button className="bg-white border-4 border-gray-50 p-2 rounded-xl hover:border-gray-100">
          <ArrowDownUp className="w-4 h-4" />
        </button>
      </div>

      {/* To Token */}
      <div className="bg-gray-50 rounded-xl p-4 mt-2">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-500">You receive</span>
          <span className="text-sm text-gray-500">Balance: 0</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border hover:border-blue-500 focus:bg-gray-50 active:bg-gray-50">
            <img
              src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"
              alt="USDC"
              className="w-6 h-6 rounded-full"
            />
            <span>USDC</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <input
            type="text"
            className="flex-1 bg-transparent text-right text-xl outline-none"
            placeholder="0.00"
            readOnly
          />
        </div>
      </div>

      {/* Exchange Rate */}
      <div className="mt-4 p-3 bg-gray-50 rounded-xl">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Exchange Rate</span>
          <span>1 SOL ≈ 101.42 USDC</span>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">
        <Wallet className="w-5 h-5" />
        Connect Wallet
      </button>
    </div>
  );
};

export default SwapCard;