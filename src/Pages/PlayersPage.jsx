import React from "react";
import AllPlayer from "../components/Page/Player/AllPlayer.jsx";

const PlayersPage = () => {
  return (
    <section className="relative z-10 min-h-screen bg-primary px-4 py-20 text-white md:pt-32 lg:pt-36">
      <AllPlayer />
    </section>
  );
};

export default PlayersPage;
