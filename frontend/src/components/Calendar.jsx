import { useState } from "react";

const messages = [
  "Igyál egy forró kakaót!", "Írj levelet valakinek.", "Süss mézeskalácsot.",
  "Díszítsd fel a lakást.", "Hallgass karácsonyi zenét.", "Hívd fel a nagyit.",
  "Gyújts gyertyát.", "Sétálj egyet a hóban.", "Csomagold be az ajándékokat.",
  "Nézz meg egy karácsonyi filmet.", "Készíts adventi koszorút.", "Adományozz valamit.",
  "Süss forgácsfát.", "Olvass fel egy mesét.", "Vendégelj meg valakit.",
  "Bontsd ki az első ajándékot.", "Énekelj karácsonyi dalt.", "Tegyél egy jót ma.",
  "Főzz forralt bort.", "Vágd fel a fenyőt.", "Díszítsd fel a fát.",
  "Készítsd el a vacsorát.", "Szenteste: gyújts gyertyát!", "Boldog karácsonyt! 🎄",
];

export default function Calendar() {
  const [opened, setOpened] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("advent-opened-days")) || {};
    } catch {
      return {};
    }
  });
  const today = new Date();
  const availableDay = today.getMonth() === 11 ? Math.min(today.getDate(), messages.length) : 0;
  const toggle = (dayIndex) => {
    if (dayIndex >= availableDay) return;
    setOpened((current) => {
      const next = { ...current, [dayIndex]: !current[dayIndex] };
      localStorage.setItem("advent-opened-days", JSON.stringify(next));
      return next;
    });
  };

  const openedCount = Object.values(opened).filter(Boolean).length;

  return (
    <section className="page">
      <h2>Adventi naptár</h2>
      <p className="lead">
        {availableDay === 0
          ? "A naptár december 1-jén nyílik ki. Addig készülj az ünnepre!"
          : "Kattints egy ajtóra, és megtudod, mi vár rád aznap."}
      </p>
      <p className="calendar-progress">Megnyitva: {openedCount} / {messages.length} nap</p>
      <div className="grid doors">
        {messages.map((message, index) => {
          const isLocked = index >= availableDay;
          return (
            <button
              key={index}
              className={`door ${opened[index] ? "open" : ""} ${isLocked ? "locked" : ""}`}
              disabled={isLocked}
              onClick={() => toggle(index)}
              aria-label={isLocked ? `A ${index + 1}. nap még nem nyitható ki` : `${index + 1}. nap megnyitása`}
            >
              {opened[index] ? message : index + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
}
