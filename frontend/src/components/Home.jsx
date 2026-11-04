export default function Home({ setPage }) {
  const now = new Date();
  let xmas = new Date(now.getFullYear(), 11, 24);
  if (now > xmas) xmas = new Date(now.getFullYear() + 1, 11, 24);
  const days = Math.ceil((xmas - now) / 86400000);

  return (
    <section className="hero">
      <p className="hero-star">✦</p>
      <h1>Készülj velünk a karácsonyra</h1>
      <p className="hero-sub">Adventi naptár, programok és receptek egy helyen.</p>
      <div className="countdown">
        <strong>{days}</strong>
        <span>nap szenteste estéig</span>
      </div>
      <button className="btn" onClick={() => setPage("Naptár")}>
        Naptár megnyitása
      </button>
    </section>
  );
}
