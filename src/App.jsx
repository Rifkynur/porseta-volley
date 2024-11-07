import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import StaffPage from "./Pages/StaffPage";
import PlayersPage from "./Pages/PlayersPage";
import DetailPlayerPage from "./Pages/DetailPlayerPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/player" element={<PlayersPage />} />
        <Route path="/player/:id" element={<DetailPlayerPage />} />
      </Routes>
    </>
  );
};

export default App;
