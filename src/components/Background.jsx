import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Floating geometric shapes for subtle animation */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
      
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(102, 126, 234, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Light rays effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-blue-100 to-transparent opacity-30 animate-pulse-slow"></div>
    </div>
  );
};

export default Background;