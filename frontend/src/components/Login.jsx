import { useState } from "react";
import { UserIcon } from "./Icons";

export default function Login() {
  const [loggedInEmail, setLoggedInEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").trim();
    const password = formData.get("password");

    if (password.length < 6) {
      setError("A jelszónak legalább 6 karakterből kell állnia.");
      return;
    }

    setError("");
    setLoggedInEmail(email);
  };

  if (loggedInEmail) {
    return (
      <section className="login-page">
        <div className="login-card glass">
          <div className="login-icon" aria-hidden="true">{loggedInEmail[0]}</div>
          <h1>Sikeres belépés</h1>
          <p className="login-notice">Bejelentkezve mint <strong>{loggedInEmail}</strong>.</p>
          <button className="btn btn-ghost login-submit" onClick={() => setLoggedInEmail("")}>Kijelentkezés</button>
        </div>
      </section>
    );
  }

  return (
    <section className="login-page">
      <div className="login-card glass">
        <div className="login-icon" aria-hidden="true"><UserIcon /></div>
        <h1>Bejelentkezés</h1>
        <p className="lead">Lépj be az adventi élményekhez.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">E-mail-cím</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="te@pelda.hu" required />
          </div>

          <div className="field">
            <label htmlFor="password">Jelszó</label>
            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Legalább 6 karakter" required />
          </div>

          <button className="btn btn-primary login-submit" type="submit">Belépés</button>
        </form>

        {error && (
          <p className="login-error" role="alert">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
