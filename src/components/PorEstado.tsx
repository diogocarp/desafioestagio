import { useState } from "react";

interface FaturamentoEstado {
  estado: string;
  faturamento: number;
}

const faturamentoEstados: FaturamentoEstado[] = [
  { estado: "SP", faturamento: 67836.43 },
  { estado: "RJ", faturamento: 36678.66 },
  { estado: "MG", faturamento: 29229.88 },
  { estado: "ES", faturamento: 27165.48 },
  { estado: "Outros", faturamento: 19849.53 },
];

function PorEstado() {
  const [percentuais, setPercentuais] = useState<
    { estado: string; percentual: number }[]
  >([]);

  const faturamentoTotal = faturamentoEstados.reduce(
    (acc, curr) => acc + curr.faturamento,
    0
  );

  const calcularPercentuais = () => {
    const percentuaisCalculados = faturamentoEstados.map(
      ({ estado, faturamento }) => ({
        estado,
        percentual: (faturamento / faturamentoTotal) * 100,
      })
    );
    setPercentuais(percentuaisCalculados);
  };

  return (
    <div>
      <p>
        Dado o valor de faturamento mensal de uma distribuidora, calcule o
        percentual detalhado por estado:
        <ul type="none">
          <li>SP – R$67.836,43</li>
          <li>RJ – R$36.678,66</li>
          <li>MG – R$29.229,88</li>
          <li>ES – R$27.165,48</li>
          <li>Outros – R$19.849,53</li>
        </ul>
      </p>
      <button onClick={calcularPercentuais}>Calcular percentuais</button>
      {percentuais.length > 0 && (
        <>
          <p>Percentual de representação de cada estado:</p>
          <ul type="none">
            {percentuais.map(({ estado, percentual }) => (
              <li key={estado}>{`${estado}: ${percentual.toFixed(2)}%`}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default PorEstado;
