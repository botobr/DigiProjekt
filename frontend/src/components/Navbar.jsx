import { useState } from "react";
import "../css/Navbar.css";
import { CloseIcon, MenuIcon, SparkleIcon } from "./Icons";

const links = ["Kezdőlap", "Naptár", "Programok", "Receptek"];

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const navigate = (nextPage) => {
    setPage(nextPage);
    setOpen(false);
  };

  return (
    <header className="wrap">
      <nav className="nav" aria-label="Főmenü">
        <button className="logo" onClick={() => navigate("Kezdőlap")}>
          <span className="logo-mark">
            <SparkleIcon />
          </span>
          Advent
        </button>

        <ul id="nav-links" className={`links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <button
                className={`nav-link ${page === l ? "active" : ""}`}
                onClick={() => navigate(l)}
                aria-current={page === l ? "page" : undefined}
              >
                {l}
              </button>
            </li>
          ))}
          <li className="mobile-btn">
            <button className="btn btn-primary" onClick={() => navigate("Bejelentkezés")}>
              Bejelentkezés
            </button>
          </li>
        </ul>

        <button className="btn btn-primary btn-sm desktop-btn" onClick={() => navigate("Bejelentkezés")}>
          Bejelentkezés
        </button>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={open}
          aria-controls="nav-links"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </header>
  );
}
