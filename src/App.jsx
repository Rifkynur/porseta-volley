import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import StaffPage from "./Pages/StaffPage";
import PlayersPage from "./Pages/PlayersPage";
import DetailPlayerPage from "./Pages/DetailPlayerPage";
import DetailStaffPage from "./Pages/DetailStaffPage";
import DetailFutsalPlayerPage from "./Pages/DetailFutsalPlayerPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/staff/:id" element={<DetailStaffPage />} />
        <Route path="/player" element={<PlayersPage />} />
        <Route path="/player/:id" element={<DetailPlayerPage />} />
        <Route path="/player/futsal/:id" element={<DetailFutsalPlayerPage />} />
      </Routes>
    </>
  );
};

export default App;
