import React from 'react';

const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    
    // Check if a file was selected before calling the handler
    if (file) {
      props.uploadImageHandler(file);
    }
  };
  
  return (
    // Added flex container that centers the component both horizontally and vertically
    <div className="w-full flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        {/* File upload input styled as a label */}
        <label
          htmlFor="fileInput"
          className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
        >
          {/* Hidden file input */}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={ShowImageHandler}
            accept="image/*" // Accept only image files
          />
          
          {/* Upload instruction text */}
          <span className="text-lg font-medium text-gray-600">
            Click to upload your image
          </span>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;