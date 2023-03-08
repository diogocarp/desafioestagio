import { useState } from "react";


function Fibonacci() {
  const [number, setNumber] = useState();
  const [result, setResult] = useState(false);

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(Number(e.target.value));
  }

  function Fibonacci(num: number): boolean {
    let a = 0;
    let b = 1;

    while (b < num) {
      const temp = b;
      b += a;
      a = temp;
    }

    return b === num || num === 0;
  }

  if (result) {
    if (Fibonacci(number)) {
      return (
        <p style={{ color: "green" }}>
          Esse número pertence a sequência de Fibonacci!
          <br/>
          <button style={{marginTop:'1em'}}onClick={() => setResult(false)}>Tentar novamente!</button>
        </p>
      );
      }else{
      return (
        <p style={{ color: "red" }}>
          Esse número não pertence a sequência de Fibonacci!
          <br/><button 
          style={{marginTop:'1em'}}onClick={() => setResult(false)}>Tentar novamente!</button>
        </p>
      );
    }
  }

  return (
    <div>
      <form>
        <label>Insira o número da sequência de Fibonacci a seguir: </label>
        <br />
        <input required style={{marginTop:'1em'}} type="text" onChange={handleNumber} />
        <br />
        <button
          style={{ color: "white",marginTop:'1em'}}
          onClick={() => {
            setResult(true);
          }}
        >
          Confirmar
        </button>
      </form>
    </div>
  );
}

export default Fibonacci;
