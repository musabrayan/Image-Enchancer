import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>

      {/* Header Section */}
      <header className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-600'>
          Upload your image and let AI enhance it for you!
        </p>
      </header>

      {/* Main Content - Image Enhancer UI */}
      <main className='w-full max-w-3xl'>
        <Home />
      </main>

      {/* Footer Section */}
      <footer className='text-center text-lg text-gray-500 mt-6'>
        <p>Created by <span className='font-semibold'>@Musab</span></p>
        <p>Powered by <span className='font-semibold'>@PicWish</span></p>
      </footer>
      
    </div>
  );
};

export default App;
