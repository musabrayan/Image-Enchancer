import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import { enhancedImageAPI } from '../utils/enhancedImageAPI';


const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);       // Original uploaded image (preview)
  const [enhancedImage, setEnhancedImage] = useState(null);   // Enhanced image returned from API
  const [loading, setLoading] = useState(false);              // Loading state for enhancement process


  const uploadImageHandler = async (file) => {
    // Set uploaded image for preview
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);

    try {
      // Call external API to enhance the image
      const enhancedURL = await enhancedImageAPI(file);

      // Set the enhanced image from the API response
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert('Error while uploading the image, try again later');
      setLoading(false);
    }
  };

  return (
    <>
      {/* Image Upload Component */}
      <ImageUpload uploadImageHandler={uploadImageHandler} />

      {/* Image Preview Component */}
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
