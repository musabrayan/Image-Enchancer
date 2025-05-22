import React from 'react';
import Loading from './Loading';

const ImagePreview = (props) => {
  console.log(props.uploaded);

  // Download function for enhanced image
  const downloadEnhancedImage = () => {
    if (props.enhanced) {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = props.enhanced;
      link.download = 'enhanced-image.jpg'; // Default filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image Section */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>

        <div className="h-64">
          {props.uploaded ? (
            <img
              src={props.uploaded}
              alt="Original"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              No Image Selected
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Image Section */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Enhanced Image
        </h2>

        <div className="h-64">
          {/* Show loading spinner if enhancing */}
          {props.loading ? (
            <Loading />
          ) : props.enhanced ? (
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              No Enhanced Image
            </div>
          )}
        </div>

        {/* Download button for enhanced image */}
        {props.enhanced && (
          <div className="p-2 bg-gray-100 flex justify-end">
            <button
              onClick={downloadEnhancedImage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;