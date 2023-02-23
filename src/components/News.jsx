import { useEffect, useState } from "react";

export default function News() {
  const [juros, setJuros] = useState([]);


  useEffect(() => {
    fetch(
      "/api/bp.json", 
    )
      .then((data) => data.json())
      .then((post) => setJuros(post.data));
  }, []);

  return (
    <div className="table-juros">
        <h2>Taxa de juro (TAA) de novos empréstimos à habitação</h2>
    <table id="juros">
      <thead>
        <tr>
          <th>Data</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
      {juros.map((juro, index) => (
            <tr key={index}>
                <td >{juro.reference_date }</td>
                <td>{juro.value }</td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
