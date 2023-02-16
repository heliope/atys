import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header(props) {

  const [menuOpen, setMenuOpen] = useState(false);



  const menuToggle = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <div className="content-header">
      <div className="header">
        <div className="site-logo">
          <img
            src="/images/logotipo.png"
            alt="Logótipo da Atys"
            title="Atys - Make IT Simple"
          />
        </div>
        <div className="auxiliar"></div>
        <nav className="nav-header" role="navigation">
          <div className="link-hamburguer" onClick={menuToggle}>
              <a className={`hamburguer-${menuOpen ? "list" : "closelist"}`} href="#/"><FontAwesomeIcon icon={faCircleXmark}/></a>
              <a className={`hamburguer-${menuOpen ? "closelist" : ""}`} href="#/"><FontAwesomeIcon icon={faBars}/></a>
          </div>
          <ul className={`menuNav-${menuOpen ? "menuOpen" : ""}`}>
            <li>
              <NavLink to="/">
                Início
                <FontAwesomeIcon className="icon-header" icon={faArrowDown} />
              </NavLink>
            </li>
            <li> 
              <NavLink to="/AboutUs/">
                Sobre Nós
                <FontAwesomeIcon className="icon-header" icon={faArrowDown} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services/">
                Serviços
                <FontAwesomeIcon className="icon-header" icon={faArrowDown} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                Notícias
                <FontAwesomeIcon className="icon-header" icon={faArrowDown} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                Contactos
                <FontAwesomeIcon className="icon-header" icon={faArrowDown} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
