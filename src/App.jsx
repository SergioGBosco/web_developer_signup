import { useMemo, useState } from "react"

function App() {

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<?>/`~";

  7
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specializzazione, setSpecializzazione] = useState("");
  const [esperienze, setEsperienze] = useState("");
  const [descrizione, setDescrizione] = useState("");


  const usernameValida = useMemo(() => {
    const caratteriValidi = username.split("").every(carattere =>
      letters.includes(carattere.toLowerCase()) ||
      numbers.includes(carattere)
    );
    return caratteriValidi && username.length >= 6;
  }, [username])

  const passwordValida = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some(carattere => letters.includes(carattere)) &&
      password.split("").some(carattere => numbers.includes(carattere)) &&
      password.split("").some(carattere => symbols.includes(carattere))
    )
  }, [password]);

  const descrizioneValida = useMemo(() => {
    return (
      descrizione.trim().length >= 100 &&
      descrizione.trim().length < 1000
    )
  }, [descrizione])


  const handlesummit = e => {
    e.preventDefault();
    if (
      !nomeCompleto.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specializzazione.trim() ||
      !esperienze.trim() ||
      esperienze <= 0 ||
      !descrizione.trim() ||
      !usernameValida ||
      !passwordValida ||
      !descrizioneValida
    ) {
      alert("Non hai inserito tutti i campi.");
      return;
    }
    console.log("la registrazione è avvenuta con successo", {
      nomeCompleto,
      username,
      password,
      specializzazione,
      esperienze,
      descrizione
    });
  }

  return (
    <>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handlesummit}>
        <label>
          <h3>Nome Completo</h3>
          <input type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
        </label>
        <label>
          <h3>Username</h3>
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {username.trim() && (
            <p style={{ color: usernameValida ? `green` : `red` }}>
              {usernameValida ? "Username Valida" : "la tua username deve contenere almeno 6 caratteri alfanumerici"}
            </p>
          )}

        </label>
        <label>
          <h3>Password</h3>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.trim() && (
            <p style={{ color: password ? `green` : `red` }}>
              {passwordValida ? "Password Valida" : "la tua password deve contenere almeno 8 caratteri , almeno 1 numero, almeno 1 simbolo, almeno 1 carattere"}
            </p>
          )}
        </label>
        <label>
          <h3>Specializzazione</h3>
          <select
            value={specializzazione}
            onChange={(e) => setSpecializzazione(e.target.value)}
          >
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label>
          <h3>Anni di Esperienza</h3>
          <input type="number"
            value={esperienze}
            onChange={(e) => setEsperienze(e.target.value)}
          />
        </label>
        <label>
          <h3>Descrizione</h3>
          <textarea
            value={descrizione}
            onChange={(e) => setDescrizione(e.target.value)}
          />
          {descrizione.trim() && (
            <p style={{ color: descrizioneValida ? `green` : `red` }}>
              {descrizioneValida ? "Descrizione Valida" : "la descrizione deve contenere almeno 100 caratteri, fino ad un massimo di 1000 "}
            </p>
          )}
        </label>
        <button type="submit">Registrati</button>
      </form>
    </>
  )
}

export default App
