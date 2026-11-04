import { ArrowRightIcon, CalendarIcon, ChefHatIcon, SparkleIcon, TicketIcon } from "./Icons";

const tiles = [
  {
    page: "Naptár",
    tone: "violet",
    Icon: CalendarIcon,
    title: "Adventi naptár",
    text: "24 ajtó, mindegyik mögött egy kis ötlet a napra.",
  },
  {
    page: "Programok",
    tone: "pink",
    Icon: TicketIcon,
    title: "Programok",
    text: "Gyertyagyújtás, Mikulás-járat, karácsonyi vásár.",
  },
  {
    page: "Receptek",
    tone: "gold",
    Icon: ChefHatIcon,
    title: "Receptek",
    text: "Mézeskalács, bejgli, forralt bor és forró csokoládé.",
  },
];

export default function Home({ setPage }) {
  const now = new Date();
  let xmas = new Date(now.getFullYear(), 11, 24);
  if (now > xmas) xmas = new Date(now.getFullYear() + 1, 11, 24);
  const days = Math.ceil((xmas - now) / 86400000);

  return (
    <>
      <section className="hero">
        <span className="eyebrow">
          <SparkleIcon /> Advent {xmas.getFullYear()}
        </span>
        <h1>
          Készülj velünk a <span className="gradient-text">karácsonyra</span>
        </h1>
        <p className="hero-sub">Adventi naptár, programok és receptek egy helyen.</p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => setPage("Naptár")}>
            Naptár megnyitása <ArrowRightIcon />
          </button>
          <button className="btn btn-ghost" onClick={() => setPage("Programok")}>
            Programok
          </button>
        </div>

        <div className="countdown glass">
          <strong>{days}</strong>
          <span className="countdown-label">
            <b>nap</b>
            szenteste estéig
          </span>
        </div>
      </section>

      <section className="bento" aria-label="Fedezd fel">
        {tiles.map(({ page, tone, Icon, title, text }) => (
          <button key={page} className={`tile glass tone-${tone}`} onClick={() => setPage(page)}>
            <span className="tile-icon">
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="tile-arrow">
              <ArrowRightIcon />
            </span>
          </button>
        ))}
      </section>
    </>
  );
}
