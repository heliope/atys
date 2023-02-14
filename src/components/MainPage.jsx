import { NavLink } from "react-router-dom";

export default function MainPage() {
  return (
    <section className="mainpage">
      <div className="texto">
        <h1>Make IT Simple</h1>
        <h2>
          Somos especializados em:
        </h2>
          <ul className="services">
            <li>Controlo de Gestão</li>
            <li>Marketing</li>
            <li>Vendas</li>
            <li>Automatização de Processos</li>
          </ul>
        <NavLink className="more-information">Pedir Orçamentos</NavLink>
      </div>
      <figure className="main-image">
        <img
          src="/images/main-page.jpg"
          alt="Computador com análise de dados"
        />
      </figure>
    </section>
  );
}
