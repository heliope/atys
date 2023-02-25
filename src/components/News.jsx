import { useEffect, useState } from "react";

export default function News() {
  const [juros, setJuros] = useState([]);

  useEffect(() => {
    fetch("/api/bp.json")
      .then((data) => data.json())
      .then((post) => setJuros(post.data));
  }, []);

  return (
    <div className="juros">
      <div className="explicacao">
        <h2>O que são taxas de juro?</h2>
        <p>
          O juro é, de forma simplificada, o preço do dinheiro. O juro é o preço
          cobrado por um empréstimo e o dinheiro que se ganha com um depósito.
          Por outras palavras, o juro é o que se paga pelo empréstimo que o
          banco nos concede ou a remuneração que se recebe do banco quando se
          deposita dinheiro numa conta de depósito.
        </p>
        <p>
          As taxas de juro indicam esse custo ou rendimento como uma percentagem
          do montante do empréstimo ou do depósito (um depósito corresponde a
          “emprestar” as poupanças ao banco) e referem-se a um determinado
          período, normalmente um ano.
        </p>
        <p>
          É possível distinguir diferentes tipos de taxa de juro dependendo, por
          exemplo, se é tida em conta a inflação, os custos da operação ou a
          forma de capitalização de juros. Existem taxas de juro nominais e
          reais, taxas de juro simples e compostas, taxas de juro fixas e
          variáveis e taxas de juro brutas e líquidas, a taxa de juro anual
          nominal (TAN) e a taxa anual de encargos efetiva global (TAEG).
        </p>
      </div>
      <div className="table-juros-header">
        <h2>Taxa de juro de novos empréstimos à habitação últimos 12 meses</h2>
      <table id="juros">
        <thead>
          <tr>
            <th>Data</th>
            <th>Taxa Anual</th>
          </tr>
        </thead>
        <tbody>
          {juros.map((juro, index) => (
            <tr key={index}>
              <td>{juro.reference_date}</td>
              <td>{juro.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figure className="news-image">
        <img src="/images/taxas_juro.jpg" alt="Taxas de juro" />
      </figure>
      </div>
    </div>
  );
}
