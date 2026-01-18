import { useState } from "react"

function App() {





  const [registrazione, setRegistrazione] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specializzazione, setSpecializzazione] = useState("");
  const [esperienze, setEsperienze] = useState("");
  const [descrizione, setDescrizione] = useState("");


  const handlesummit = e => {
    e.preventDefault();
    if (
      !nomeCompleto.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specializzazione.trim() ||
      !esperienze.trim() ||
      esperienze <= 0 ||
      !descrizione.trim()
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
        </label>
        <label>
          <h3>Password</h3>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
        </label>
        <button type="submit">Registrati</button>
      </form>
    </>
  )
}

export default App
