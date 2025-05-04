import React from "react";
import Lottie from "lottie-react";
import heartsAnimation from "../assets/animations/floating-hearts.json";

const BackgroundAnimation = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      opacity: 0.3,
    }}>
      <Lottie animationData={heartsAnimation} loop autoPlay />
    </div>
  );
};

export default BackgroundAnimation;
