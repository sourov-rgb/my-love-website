// src/pages/SecretPage.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";

function SecretPage() {
  const [openedBox, setOpenedBox] = useState(null);

  const birthday = new Date("2025-03-23T00:00:00");

  const photos = [
    {
      src: "/assets/photos/photo1.jpg",
      compliment: "Your smile is the sunrise my heart wakes up to. 🌅",
    },
    {
      src: "/assets/photos/photo2.jpg",
      compliment: "Every sparkle in your eyes is a universe of beauty. ✨",
    },
    {
      src: "/assets/photos/photo3.jpg",
      compliment: "Your laugh is my favorite melody. 🎶",
    },
    {
      src: "/assets/photos/photo4.jpg",
      compliment: "With you, every moment feels magical. 🪄",
    },
    {
      src: "/assets/photos/photo5.jpg",
      compliment: "A thousand words can't describe your grace. 🌸",
    },
  ];

  const calculateCountdown = () => {
    const now = new Date();
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderGiftContent = () => {
    if (openedBox === 1) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-4 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={photo.src}
                alt={`Memory ${index + 1}`}
                className="w-72 h-72 object-cover rounded-md mb-4"
              />
              <p className="text-center text-pink-700 font-medium">{photo.compliment}</p>
            </motion.div>
          ))}
        </div>
      );
    }

    if (openedBox === 2) {
      return (
        <div className="text-center mt-8 text-3xl font-bold text-purple-700">
          ⏳ Birthday Countdown:
          <div className="mt-4">
            {countdown.days} Days {countdown.hours} Hours {countdown.minutes} Minutes {countdown.seconds} Seconds
          </div>
        </div>
      );
    }

    if (openedBox === 3) {
      return (
        <div className="relative w-full h-[500px] mt-8 overflow-hidden">
          <FlowerShower />
          <h2 className="text-center text-3xl font-bold text-pink-600 mt-10">
            🌸 A Shower of Flowers for You! 🌸
          </h2>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">
        You Finally Found the Secret Page! 🎉
      </h1>

      {!openedBox && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {[1, 2, 3].map((box) => (
            <motion.div
              key={box}
              className="w-40 h-40 bg-pink-400 rounded-2xl flex items-center justify-center text-white text-2xl font-bold cursor-pointer shadow-2xl"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              animate={{
                y: ["0%", "-5%", "0%"],
                transition: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpenedBox(box)}
            >
              🎁
            </motion.div>
          ))}
        </div>
      )}

      {openedBox && (
        <>
          <ConfettiExplosion />
          {renderGiftContent()}
        </>
      )}
    </div>
  );
}

function FlowerShower() {
  const flowers = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {flowers.map((_, index) => (
        <motion.div
          key={index}
          className="absolute top-0"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: "100vh",
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}

export default SecretPage;
