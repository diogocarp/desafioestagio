import { useState } from "react";

function Invertida() {
  const [texto, setTexto] = useState("");
  function handleText(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(String(e.target.value));
  }

  let invertida = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
  }

  return (
    <div>
      <label>Insira o texto a seguir: </label>
      <br />
      <input maxLength={20} style={{marginTop:'1em'}} type="text" onChange={handleText} />
      <br />
      <h3 style={{marginTop:'1em'}}>Texto Invertido:<br/> {invertida} </h3>
    </div>
  );
}

export default Invertida;
