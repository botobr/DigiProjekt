const events = [
  { date: "2026-11-28", label: "Nov 28.", title: "Adventi gyertyagyújtás", time: "17:00", place: "Főtér" },
  { date: "2026-12-06", label: "Dec 6.", title: "Mikulás-járat", time: "10:00", place: "Városháza előtt" },
  { date: "2026-12-13", label: "Dec 13.", title: "Karácsonyi vásár", time: "09:00-18:00", place: "Vár udvar" },
  { date: "2026-12-20", label: "Dec 20.", title: "Betlehemes játék", time: "16:00", place: "Templom" },
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
      <div className="grid">
        {events.map((event) => (
          <div className="card" key={event.title}>
            <span className="tag">{event.label}</span>
            <h3>{event.title}</h3>
            <p>{event.time} · {event.place}</p>
            <a className="event-link" href={calendarUrl(event)} target="_blank" rel="noreferrer">
              Naptárba mentés
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
