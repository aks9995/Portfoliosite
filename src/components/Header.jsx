import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <Navcontent />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <Navcontent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const Navcontent = ({ setMenuOpen }) => (
  <>
    <h2>Anup Kumar</h2>
    <div>
      <a href="#home" onClick={() => setMenuOpen(false)}>
        Home
      </a>
      <a href="#work" onClick={() => setMenuOpen(false)}>
        Work
      </a>
      <a href="#timeline" onClick={() => setMenuOpen(false)}>
        Skills
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>
    </div>
    <a href="#footer" onClick={() => setMenuOpen(false)}>
      <button>Socials</button>
    </a>
  </>
);

export default Header;
