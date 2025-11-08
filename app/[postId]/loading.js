// DotLoader.jsx
import React from 'react';

const Loading = () =>{

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-20 h-[calc(100vh-80px)]">
      <div className="flex gap-2">
        <div 
          className={`w-4 h-4 bg-blue-400 rounded-full animate-bounce`}
          style={{ animationDelay: '0.1s' }}
        ></div>
        <div 
          className={`w-4 h-4 bg-blue-400  rounded-full animate-bounce`}
          style={{ animationDelay: '0.2s' }}
        />
        <div 
          className={`w-4 h-4 bg-blue-400  rounded-full animate-bounce`}
          style={{ animationDelay: '0.3s' }}
        />
      </div>
      {/* <p className="text-gray-600 font-medium text-xl">Loading</p> */}
    </div>
  );
};

export default Loading;