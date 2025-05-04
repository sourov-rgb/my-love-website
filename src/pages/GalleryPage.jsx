import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import crossIcon from "../assets/icon/cross.png"
import avatarImage from "../assets/icon/instagramdp.jpg"
import likeIcon from "../assets/icon/like.png"
import commentIcon from "../assets/icon/chat.png"
import shareIcon from "../assets/icon/send.png"
import saveIcon from "../assets/icon/bookmark.png"



// Auto-generated unique quotes for the images (mocked for now)
const quotes = [
  "🌟 Your eyes hold galaxies of wonder 🌌",
  "💫 Every glance of yours paints poetry 🎨",
  "🌸 Your smile softens the hardest days 🌞",
  "💖 You glow like morning sun on rose petals 🌹",
  "✨ You carry grace like a gentle breeze 🍃",
  "🌷 In your presence, the world slows to beauty 🌍",
  "🥀 Your elegance whispers in silence 💫",
  "💎 You sparkle more than starlight on calm seas 🌊",
  "🌼 Your laugh is music the universe envies 🎶",
  "🦋 You move like poetry written in air ✒️",
  "🌙 In your eyes, the moon feels shy ✨",
  "🎀 You are a portrait of heavenly wonder 🖼️",
  "🌟 Your voice calms storms within me 🌪️",
  "🌈 You color my world in the softest hues 🎨",
  "🪞 In your reflection, beauty finds its truth 💗",
  "🌺 Even the flowers blush when you pass 🌸",
  "🌤️ Your smile turns clouds into sunshine ☀️",
  "💫 You walk like time forgets to move 🕰️",
  "🌹 Every moment with you blooms eternally 🌼",
  "🧚‍♀️ You dance like dreams on tiptoes 💫",
  "🍯 Your kindness is sweeter than honey 🍃",
  "💐 You're a bouquet of endless charm 🌸",
  "🌟 Your presence makes ordinary magical ✨",
  "🎇 Every word you speak is a spark of light 💬",
  "🌊 Your soul flows like the gentlest ocean 💙",
  "👑 You wear confidence like a crown 💫",
  "🌜 When you smile, even the stars take note 🌠",
  "🍁 You bring warmth like autumn's hug 🍂",
  "🐚 Your silence echoes peace and beauty 🌊",
  "🎵 Your laughter is a song I never forget 💖",
  "🌸 Your smile could melt a thousand winters ❄️",
  "👀 In your eyes, I see galaxies unexplored 🌌",
  "🌞 Your presence is my personal sunrise 🌅",
  "💃 Every step you take rewrites elegance 👣",
  "🦢 You move like a swan through moonlight 🌙",
  "🌺 Your laughter is the scent of blooming jasmine 🍃",
  "🎨 Your beauty makes painters jealous of reality 🖌️",
  "🕊️ You bring peace wherever you go 🌼",
  "📸 Every moment with you is a perfect picture 🖼️",
  "💌 You are love written in human form ❤️",
  "🔮 In your gaze, I see dreams come to life ✨",
  "🍂 Your voice is the sound of golden autumns 🌾",
  "🌟 Your grace dances in the air like stardust 💫",
  "🌸 You bloom in ways words can’t describe 📝",
  "💗 Your kindness could heal nations 🌍",
  "🥂 Being with you is a celebration every second 🎉",
  "🪶 You’re as soft as a whispered promise 💫",
  "🌼 You bring life to lifeless days ☀️",
  "👒 You wear beauty like it was stitched to your soul ✨",
  "🫧 Your aura is as gentle as morning mist 🌄",
  "💝 Your love is my favorite masterpiece 🎨",
  "🌻 You turn the ordinary into golden wonder 🌟",
  "🎐 The wind hums your name through the trees 🌳",
  "👑 Beauty bows to your grace and charm 💫",
  "🍃 Your serenity is a shelter for my heart 🏡",
  "🎶 You speak in melodies only the soul can hear 💖",
  "🌜 You shine even brighter in the quiet of night 🌟",
  "🫀 Your heartbeat is the rhythm of love itself 🎵",
  "🌹 You are poetry in the shape of a woman ✍️",
  "🧸 Your warmth feels like home I never want to leave 🏠",
  "🌈 Your smile paints color into my gray skies 🎨",
  "🎇 When you laugh, the stars celebrate ✨",
  "🍓 Your sweetness lingers like a summer kiss 💋",
  "🌬️ Your words are soft as wind through petals 🌸",
  "🧿 One glance from you guards my whole soul 💙",
  "🕯️ Your light burns gentle but eternal 🔥",
  "💎 Your soul shines brighter than diamonds ✨",
  "🌺 You’re nature’s finest masterpiece on display 🖼️",
  "🦋 You flutter into hearts without a sound 🌼",
  "🧁 You are as lovely as a whispered wish 💭",
  "🌙 Even moonlight envies your glow 🌟",
  "📖 Your smile writes fairytales in real time 🏰",
  "🎐 You bring calm to my storms and stillness to my chaos 🌊",
  "🥀 Your silence speaks louder than thunder 💬",
  "🌹 You bloom without needing to try 🌸",
  "🍷 Your elegance is aged like fine wine 🕰️",
  "🧸 In your arms, the world makes sense again 🫂",
  "🌟 Every part of you glows with natural grace ✨",
  "🫧 Your innocence is wrapped in wisdom 🎀",
  "💐 You’re a garden full of wonder and warmth 🌞",
  "🕊️ Your presence is a prayer answered 🌈",
  "💘 You make my heart write love songs on repeat 🎵",
  "🧭 You guide me simply by being you 🌍",
  "💫 You are the reason stars still shine above 🌠",
  "🍁 You fall into my life like golden leaves of joy 🍂",
  "🌄 The morning wakes up inspired by you ☀️",
  "🎇 Loving you feels like a permanent firework show 🎆",
  "🪻 Your femininity is fierce, soft, and sacred 💮",
  "🧬 You are made of everything I ever dreamed of 🌟",
  "🎠 Being with you feels like magic on loop ✨",
  "🌟 You shine without even trying to ✨",
  "🎨 Your presence turns moments into masterpieces 🖌️",
  "🌸 In your smile, I find my favorite sunrise 🌅",
  "💞 You love with a heart bigger than the sky ☁️",
  "🧚 You’re the magic I stopped believing in—until you ✨",
  "🌷 You carry spring in every breath you take 🌼",
  "🫧 You’re as rare as a dream that stays after waking 🌙",
  "📸 Your beauty doesn’t just shine—it’s timeless 🕰️",
  "🎻 Your laugh could tune broken hearts back to music 🎶",
  "🌈 You wear happiness like it's your favorite perfume 🌺",
  "🕯️ Your presence brings light into my darkest hours 🌌",
  "👑 You rule with elegance, not power 💫",
  "🪞 You reflect everything good this world can be ✨",
  "🌙 In your gaze, I see forever 🌠",
  "🫀 My heartbeat rewrites itself around you 💓",
  "🕊️ With you, peace isn’t a place—it’s a feeling 💗",
  "🎀 Your grace wraps around my soul like silk 💫",
  "🍃 You’re the gentle breath in a world that forgets to pause 🌼",
  "💋 Every kiss from you is a story my lips never forget 📖",
  "🌌 Loving you feels like flying among stars 🌠",
  // Add more quotes up to 110 or generate them dynamically
];

const images = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,svg}", { eager: true });
const imageList = Object.values(images).map((img, idx) => ({
  src: img.default,
  quote: quotes[idx % quotes.length] || "A beautiful moment 🌟", // Repeat quotes if fewer than the number of images
}));

function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="min-h-screen pt-0 p-4">
      <motion.h1
        className="text-3xl md:text-5xl font-love text-center text-purple-700 mb-8 cursor-pointer"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Beautiful Memories 📸
      </motion.h1>

      {/* Gallery with Masonry Layout */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 ">
        {imageList.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item relative rounded-lg overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => { setIsOpen(true); setPhotoIndex(index); }}
          >
            <img
              src={image.src}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox for clicked image */}
     {isOpen && (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70 p-4">
    <div className="relative w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-2xl">
      
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent z-10" />
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Close Button */}
      <button
        className="absolute top-2 right-2 z-50 text-black text-2xl"
        onClick={() => setIsOpen(false)}
      >
        <img src={crossIcon} alt="Close" className="w-6 h-6" />
      </button>

      {/* Username and header */}
      <div className="flex items-center p-3 gap-3 relative z-20">
        <img
          src={avatarImage}
          alt="User avatar"
          className="w-10 h-10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">rikitabiswas98</span>
          <span className="text-xs text-gray-500">westbengal.india</span>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-[450px] aspect-[9/16] bg-black">
        <img
          src={imageList[photoIndex].src}
          alt={`Memory ${photoIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-2 relative z-20">
        <div className="flex justify-between items-center w-full mb-2">
          <div className="flex gap-4">
            <img
              src={likeIcon}
              alt="Like"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
            <img
              src={commentIcon}
              alt="Comment"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
            <img
              src={shareIcon}
              alt="Share"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition"
            />
          </div>
          <img
            src={saveIcon}
            alt="Save"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
        </div>

        <p className="text-sm">
          <span className="font-semibold">rikitabiswas98</span> {imageList[photoIndex].quote}
        </p>
      </div>
    </div>
  </div>
)}


    </div>
  );
}

export default GalleryPage;
