import React from "react";
import Lottie from "lottie-react";
import fireworks from "../assets/animations/fireworks.json";
import balloons from "../assets/animations/balloons.json";

const CelebrationEffects = () => {
  return (
    <div>
      {/* Fireworks */}
      <Lottie
        animationData={fireworks}
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
        loop
        autoplay
      />

      {/* Balloons */}
      <Lottie
        animationData={balloons}
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: "none",
        }}
        loop
        autoplay
      />
    </div>
  );
};

export default CelebrationEffects;
