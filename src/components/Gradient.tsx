import React from 'react'

const Gradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img 
        src="/logo512.jpeg" 
        alt="Gradient background"
        className="absolute top-[20%] left-[20%] w-[233px] h-[233px] rounded-full blur-2xl opacity-20 object-cover"
      />
    </div>
  )
}

export default Gradient 