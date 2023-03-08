import { useEffect, useState } from "react";
import dados from "../assets/dados.json";

interface DadosFaturamento {
  valor: number;
}

function Faturamento() {
  const [faturamentoDiario, setFaturamentoDiario] = useState<
    DadosFaturamento[]
  >([]);
  const [menorFaturamento, setMenorFaturamento] = useState<
    number | undefined
  >();
  const [maiorFaturamento, setMaiorFaturamento] = useState<
    number | undefined
  >();
  const [diasAcimaMedia, setDiasAcimaMedia] = useState<number>(0);

  useEffect(() => {
    setFaturamentoDiario(dados.map((obj: DadosFaturamento) => obj.valor));
  }, []);

  useEffect(() => {
    if (faturamentoDiario.length === 0) {
      return;
    }

    setMenorFaturamento(Math.min(...faturamentoDiario));

    setMaiorFaturamento(Math.max(...faturamentoDiario));

    const diasComFaturamento = faturamentoDiario.filter(
      (faturamento) => faturamento > 0
    );
    const somaFaturamento = diasComFaturamento.reduce(
      (acc, curr) => acc + curr,
      0
    );
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
    const diasAcimaMedia = diasComFaturamento.filter(
      (faturamento) => faturamento > mediaFaturamento
    ).length;
    setDiasAcimaMedia(diasAcimaMedia);
  }, [faturamentoDiario]);

  return (
    <div>
      <p>Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:<br/>
• O menor valor de faturamento ocorrido em um dia do mês;<br/>
• O maior valor de faturamento ocorrido em um dia do mês;<br/>
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
</p>
      {faturamentoDiario.length === 0 && <p>Carregando dados...</p>}
      {faturamentoDiario.length > 0 && (
        <>
          <p>Menor faturamento: {menorFaturamento}</p>
          <p>Maior faturamento: {maiorFaturamento}</p>
          <p>Número de dias acima da média: {diasAcimaMedia}</p>
        </>
      )}
    </div>
  );
}

export default Faturamento;
