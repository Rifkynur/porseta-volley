import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Icon from "../../assets/home/icon.jpg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navbarRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-primary p-4 text-white shadow-lg md:px-10 md:py-8">
      <Link to={"/"}>
        <div className="flex cursor-pointer items-center">
          <img src={Icon} alt="logo" className="mr-2 size-10 rounded-full lg:size-12" />
          <h2 className="text-lg font-bold uppercase">porseta</h2>
        </div>
      </Link>
      <motion.button ref={menuRef} aria-label="menu" initial={false} className="relative size-10 rounded-full bg-secondary md:hidden" animate={navbarOpen ? "open" : "closed"} onClick={() => setNavbarOpen((prev) => !prev)}>
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-5 bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-1 w-5 bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.span
          style={{
            left: "calc(50% + 4px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-1 w-3 bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: ["calc(50% + 4px)", "calc(50% + 4px)", "50%"],
              bottom: ["35%", "35%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: ["50%", "50%", "calc(50% + 4px)"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      </motion.button>
      <ul className="hidden gap-4 font-semibold md:flex">
        <li>
          <NavLink to={"/"} className={"lg:text-lg"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={"lg:text-lg"}>
            Tentang
          </NavLink>
        </li>
        <li>
          <NavLink to={"/blog"} className={"lg:text-lg"}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to={"/gallery"} className={"lg:text-lg"}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to={"/player"} className={"lg:text-lg"}>
            Player
          </NavLink>
        </li>
        <li>
          <NavLink to={"/kas"} className={"lg:text-lg"}>
            Kas
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/contact"} className={"lg:text-lg"}>
            Contact
          </NavLink>
        </li> */}
      </ul>
      <motion.ul
        ref={navbarRef}
        className={`absolute left-0 top-full flex w-full origin-top flex-col items-center justify-center gap-4 overflow-hidden bg-primary font-semibold md:hidden`}
        animate={navbarOpen ? "open" : "closed"}
        variants={{
          open: {
            height: "fit-content",
            opacity: 1,
            paddingBlock: "10px",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          },
          closed: {
            height: 0,
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
            },
          },
        }}
      >
        <li>
          <NavLink to={"/"} className={"lg:text-lg"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={"lg:text-lg"}>
            Tentang
          </NavLink>
        </li>
        <li>
          <NavLink to={"/blog"} className={"lg:text-lg"}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to={"/gallery"} className={"lg:text-lg"}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to={"/player"} className={"lg:text-lg"}>
            Player
          </NavLink>
        </li>

        <li>
          <NavLink to={"/kas"} className={"lg:text-lg"}>
            Kas
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={"lg:text-lg"}>
            Contact
          </NavLink>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
