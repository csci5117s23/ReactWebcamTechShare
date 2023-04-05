import React from 'react';
import Webcam from 'react-webcam';

export default function WebcamCapture({ onCapture }) {
  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  const webcamRef = React.useRef(null);

  return (
    <div>
      <Webcam
        className='Captured'
        audio={false}
        height={600}
        screenshotFormat="image/jpeg"
        width={600}
        ref={webcamRef}
      />
      <button onClick={handleCapture}>Capture photo</button>
    </div>
  );
}