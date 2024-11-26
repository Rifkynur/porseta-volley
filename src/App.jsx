import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import PlayersPage from "./Pages/PlayersPage";
import DetailPlayerPage from "./Pages/DetailPlayerPage";
import DetailStaffPage from "./Pages/DetailStaffPage";
import DetailFutsalPlayerPage from "./Pages/DetailFutsalPlayerPage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import KasPage from "./Pages/KasPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/player" element={<PlayersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/kas" element={<KasPage />} />
        <Route path="/player/:id" element={<DetailPlayerPage />} />
        <Route path="/player/futsal/:id" element={<DetailFutsalPlayerPage />} />
        <Route path="/player/staff/:id" element={<DetailStaffPage />} />
      </Routes>
    </>
  );
};

export default App;
