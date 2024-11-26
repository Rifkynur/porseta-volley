import React from "react";
import underConstruction from "../assets/underConstruction.png";
import KasCard from "../components/Page/Kas/KasCard";

const KasPage = () => {
  return (
    <section className="min-h-screen bg-primary px-4 pt-20 lg:pt-36">
      {/* <h1 className="text-center font-roboto text-xl font-bold capitalize text-colorText">Kas</h1> */}
      {/* <KasCard /> */}
      <img src={underConstruction} />
    </section>
  );
};

export default KasPage;
