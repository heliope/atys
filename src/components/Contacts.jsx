import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contacts() {
  return (
    <div className="form">
      <div className="image-form">
        <figure>
          <img
            src="/images/contactos.png"
            alt="Imagens do separador Contactos"
          />
        </figure>
      </div>
      <div className="auxiliar-form">
        <h2>Pedido de Mais Informações</h2>
        <h1>Fale-nos das suas dúvidas ou solicite a sua proposta</h1>
        <form>
          <input
            className="name-control"
            placeholder="Nome"
            required
            name="name"
            type="text"
          ></input>
          <div className="auxiliar-contactos">
            <input
              className="email-control"
              placeholder="Email"
              required
              name="email"
              type="email"
            ></input>
            <input
              className="phone-control"
              placeholder="Telemóvel"
              required
              name="phone"
              type="text"
            ></input>
          </div>

          <textarea
            className="message-control"
            placeholder="Mensagem"
            rows="3"
            required
            name="message"
            cols="50"
          ></textarea>
          <button type="submit" className="envio-mensagem">
            {" "}
            A enviar Mensagem
          </button>
        </form>
        <p className="contact">Onde nos encontrar</p>
        <div className="cards">
          <div className="card-address">
            <i>
              <FontAwesomeIcon className="" icon={faLocationDot}/>
            </i>
            <p>
              Localização
            </p>
            <address>
              Zona Ind. de Coimbrões Lt.50 
            </address>
            <address>
              3500-168
            </address>
          </div>
          <div className="card-phone">
            <i>
              <FontAwesomeIcon icon={faPhone}/>
            </i>
            <p>Telemóvel</p>
            <a href="tel:+351232416964">232416964</a>
          </div>
          <div className="card-email">
            <i>
              <FontAwesomeIcon icon={faEnvelope}/>
            </i>
            <p>Email</p>
            <address>
              <a href="mailto:atys@atysservice.com">atys@atysservice.com</a>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
