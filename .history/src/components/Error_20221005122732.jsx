import React from 'react';

const Error = () => (
  <div className="w-full flex justify-center items-center">
    <h1 className="text-white text-2xl mt-2 font-">
      {title || 'Loading...'}
    </h1>
  </div>
);

export default Error;
