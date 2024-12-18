import React from 'react';
import { Zap } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
      <Zap className="w-5 h-5 text-white" />
    </div>
    <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Ultra
    </span>
  </div>
);

export default Logo;