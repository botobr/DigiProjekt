import { ClockIcon, PinIcon, PlusIcon } from "./Icons";

const MONTHS = ["jan", "feb", "már", "ápr", "máj", "jún", "júl", "aug", "szep", "okt", "nov", "dec"];

const events = [
  { date: "2026-11-28", title: "Adventi gyertyagyújtás", time: "17:00", place: "Főtér" },
  { date: "2026-12-06", title: "Mikulás-járat", time: "10:00", place: "Városháza előtt" },
  { date: "2026-12-13", title: "Karácsonyi vásár", time: "09:00-18:00", place: "Vár udvar" },
  { date: "2026-12-20", title: "Betlehemes játék", time: "16:00", place: "Templom" },
];

function calendarUrl(event) {
  const start = `${event.date.replaceAll("-", "")}T${event.time.slice(0, 5).replace(":", "")}00`;
  const end = `${event.date.replaceAll("-", "")}T${event.time.includes("-") ? event.time.slice(6).replace(":", "") : event.time.slice(0, 5).replace(":", "")}00`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${start}/${end}`,
    location: event.place,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

export default function Events() {
  return (
    <section className="page">
      <h2>Programok</h2>
      <p className="lead">Ne hagyd ki a közelgő adventi eseményeket.</p>
      <div className="event-list">
        {events.map((event) => {
          const [, month, day] = event.date.split("-");
          return (
            <article className="event glass" key={event.title}>
              <time className="event-date" dateTime={event.date}>
                <b>{Number(day)}</b>
                <span>{MONTHS[Number(month) - 1]}</span>
              </time>
              <div>
                <h3>{event.title}</h3>
                <p className="event-meta">
                  <span><ClockIcon /> {event.time}</span>
                  <span><PinIcon /> {event.place}</span>
                </p>
              </div>
              <a className="btn btn-ghost btn-sm" href={calendarUrl(event)} target="_blank" rel="noreferrer">
                <PlusIcon /> Naptárba mentés
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
