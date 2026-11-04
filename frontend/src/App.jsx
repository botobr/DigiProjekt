import { useState } from "react";
import Calendar from "./components/Calendar";
import Events from "./components/Events";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import "./css/App.css";

export default function App() {
  const [page, setPage] = useState("Kezdőlap");

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} />
      <main>
        {page === "Kezdőlap" && <Home setPage={setPage} />}
        {page === "Naptár" && <Calendar />}
        {page === "Programok" && <Events />}
        {page === "Receptek" && <Recipes />}
        {page === "Bejelentkezés" && <Login />}
      </main>
    </div>
  );
}
