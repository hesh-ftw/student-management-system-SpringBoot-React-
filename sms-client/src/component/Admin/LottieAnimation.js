import React from 'react';
import Lottie from 'lottie-react';
import animationData from './Animation - 1720279498836.json'; // Adjust the path accordingly

const LottieAnimation = () => {
  return (
    <Lottie animationData={animationData} loop={true} className="lottie-animation" />
  );
};

export default LottieAnimation;
