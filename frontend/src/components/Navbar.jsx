import { useState } from "react";
import '../css/Navbar.css';

const links = ["Kezdőlap", "Naptár", "Programok", "Receptek"];

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const navigate = (nextPage) => {
    setPage(nextPage);
    setOpen(false);
  };

  return (
    <>

      <header className="wrap">
        <nav className="nav">
          <button className="logo" onClick={() => navigate("Kezdőlap")}>
            <span className="star">✦</span> Advent
          </button>

          <ul className={`links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <li key={l}>
                <button
                  className={page === l ? "active" : ""}
                  onClick={() => navigate(l)}
                  aria-current={page === l ? "page" : undefined}
                >
                  {l}
                </button>
              </li>
            ))}
            <li className="mobile-btn">
              <button className="btn" onClick={() => navigate("Bejelentkezés")}>
                Bejelentkezés
              </button>
            </li>
          </ul>

          <button className="btn desktop-btn" onClick={() => navigate("Bejelentkezés")}>
            Bejelentkezés
          </button>

          <button
            className="burger"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>
      </header>
    </>
  );
}