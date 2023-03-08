import { useState } from "react";
import "./styles/App.css";
import Faturamento from "./components/Faturamento";
import Fibonacci from "./components/Fibonacci";
import Invertida from "./components/Invertida";
import PorEstado from "./components/PorEstado";

const App = () => {
  const [activeButton, setActiveButton] = useState(0);

  const RenderComponent = () => {
    switch (activeButton) {
      case 0:
        return <Fibonacci />;

      case 1:
        return <Faturamento />;

      case 2:
        return <PorEstado />;

      case 3:
        return <Invertida />;
    }
  };

  return (
    
    
    <div className="container">
    <h2 style={{marginBottom:'2em'}}>Desafio Estágio - Target Sistemas</h2>
      <div className="buttons">
        <button
          className={activeButton === 0 ? "active" : ""}
          onClick={() => setActiveButton(0)}
        >
          Fibonacci
        </button>
        <button
          className={activeButton === 1 ? "active" : ""}
          onClick={() => setActiveButton(1)}
        >
          Faturamento
        </button>
        <button
          className={activeButton === 2 ? "active" : ""}
          onClick={() => setActiveButton(2)}
        >
          Por Estado
        </button>
        <button
          className={activeButton === 3 ? "active" : ""}
          onClick={() => setActiveButton(3)}
        >
          Invertida
        </button>
      </div>
      <div className="content">{<RenderComponent />}</div>
    </div>
    
  );
};

export default App;