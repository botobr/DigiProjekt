import { useState } from "react";
import { GiftIcon, LockIcon } from "./Icons";

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
      <div className="calendar-progress">
        <strong>Megnyitva: {openedCount} / {messages.length} nap</strong>
        <div
          className="progress"
          role="progressbar"
          aria-label="Megnyitott napok"
          aria-valuemin={0}
          aria-valuemax={messages.length}
          aria-valuenow={openedCount}
        >
          <div className="progress-bar" style={{ width: `${(openedCount / messages.length) * 100}%` }} />
        </div>
      </div>
      <div className="doors">
        {messages.map((message, index) => {
          const isLocked = index >= availableDay;
          const isOpen = !isLocked && opened[index];
          const isToday = !isLocked && !isOpen && index === availableDay - 1 && today.getDate() <= messages.length;
          const state = isLocked ? "locked" : isOpen ? "open" : "ready";
          return (
            <button
              key={index}
              className={`door ${state} ${isToday ? "today" : ""}`}
              disabled={isLocked}
              onClick={() => toggle(index)}
              aria-label={isLocked ? `A ${index + 1}. nap még nem nyitható ki` : `${index + 1}. nap megnyitása`}
            >
              <span className="door-num">{index + 1}</span>
              {isLocked && <LockIcon />}
              {state === "ready" && <GiftIcon />}
              {isOpen && <span className="door-msg">{message}</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}
