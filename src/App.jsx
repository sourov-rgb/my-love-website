import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import StoryPage from "./pages/StoryPage";
import SecretPage from "./pages/SecretPage";
import ConfettiHearts from "./components/ConfettiHearts";
import BackgroundAnimation from './components/BackgroundAnimation';
import CelebrationEffects from './components/CelebrationEffects';

function App() {
  return (
    <Router>
      <div className="relative" style={{
        backgroundImage: 'url("/src/assets/herImage.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}>
          {/* <BackgroundAnimation />
          <CelebrationEffects /> */}
        <ConfettiHearts />
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10 flex justify-center gap-8 py-4">
          <Link to="/" className="text-pink-600 font-bold hover:underline">Home</Link>
          <Link to="/gallery" className="text-pink-600 font-bold hover:underline">Gallery</Link>
          <Link to="/story" className="text-pink-600 font-bold hover:underline">Story</Link>
          <Link to="/secret" className="text-pink-600 font-bold hover:underline">Secret</Link>
        </nav>

        {/* Pages */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/secret" element={<SecretPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
