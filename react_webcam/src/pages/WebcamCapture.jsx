import React, { useState } from 'react';
import Capturing from '../components/Capturing';

export default function App() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleCapture = (imageSrc) => {
    setImageSrc(imageSrc);
  };

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt = "MyPicture" />}
      <Capturing onCapture={handleCapture} />
    </div>
  );
}