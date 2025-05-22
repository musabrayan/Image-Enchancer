import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-80 bg-gray-100">
      <ClipLoader color="#4F46E5" size={60} />
    </div>
  );
};

export default Loading;
