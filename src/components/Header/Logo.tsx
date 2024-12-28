import React from 'react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-lg overflow-hidden">
      <img
        src="/logo512.jpeg"
        alt="Ultra logo"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Ultra
    </span>
  </div>
);

export default Logo;