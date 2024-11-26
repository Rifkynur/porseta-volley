import { useState, useEffect } from "react";
import FutsalPlayer from "./FutsalPlayer";
import VoliPlayer from "./VoliPlayer";
import AllStaff from "../Staff/AllStaff";

const AllPlayer = () => {
  const [activeTabs, setActiveTabs] = useState(1);

  const chooseSport = (number) => {
    setActiveTabs(number);
    localStorage.setItem("activeTab", number);
  };

  useEffect(() => {
    const saveTabs = localStorage.getItem("activeTab");
    if (saveTabs) {
      setActiveTabs(Number(saveTabs));
    } else {
      localStorage.setItem("activeTab", 1);
    }
  }, []);

  return (
    <>
      <h1 className="text-shad relative z-10 mt-8 text-center text-xl font-bold bg-blend-color text-shadow lg:text-4xl">Meet Our players</h1>
      <div className="flex w-full items-center border-b py-2 pt-8">
        <button className={`rounded-md px-3 py-1 text-sm font-bold ${activeTabs === 1 ? "text-secondary" : "text-white"}`} onClick={() => chooseSport(1)}>
          Voli
        </button>
        <button className={`rounded-md px-3 py-1 text-sm font-bold ${activeTabs === 2 ? "text-secondary" : "text-white"}`} onClick={() => chooseSport(2)}>
          Futsal
        </button>
        <button className={`rounded-md px-3 py-1 text-sm font-bold ${activeTabs === 3 ? "text-secondary" : "text-white"}`} onClick={() => chooseSport(3)}>
          Badminton
        </button>
        <button className={`rounded-md px-3 py-1 text-sm font-bold ${activeTabs === 4 ? "text-secondary" : "text-white"}`} onClick={() => chooseSport(4)}>
          Staff
        </button>
      </div>
      {activeTabs === 1 && <VoliPlayer />}
      {activeTabs === 2 && <FutsalPlayer />}
      {activeTabs === 4 && <AllStaff />}
    </>
  );
};

export default AllPlayer;
