import { faFacebookMessenger, faGithub, faSquareInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Entre em Contato Conosco</h1>
      <p>Você pode entrar em contato conosco através das seguintes opções:</p>
      
      <div className="contact-options">
        <div className="contact-option">
          <h2><FontAwesomeIcon icon={faEnvelope} /></h2>
          <p>Envie um email para: <a href="e-mail to:contato@engestore.com">engesstore@gmail.com</a></p>
        </div>

        <div className="contact-option">
          <h2><FontAwesomeIcon icon={faPhone} /></h2>
          <p>Ligue para nós: <a href="tel:+258 87 460 4610" target="_blank" rel="noopener noreferrer">Ligar agora</a></p>
          </div>

        <div className="contact-option">
          <h5><FontAwesomeIcon icon={faWhatsapp} /></h5>
          <p> Contacte enge store: <a href="https://wa.me/258867005588" target="_blank" rel="noopener noreferrer">Conversar agora</a></p>
        </div>

        <div className="contact-option">
          <h2><FontAwesomeIcon icon={faFacebookMessenger} /></h2>
          <p>Visite nossa página no Facebook: <a href="https://facebook.com/engestore" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>

        <div className="contact-option">
        <h4>  <h2><FontAwesomeIcon icon={faGithub} /></h2></h4>
          <p>Veja nossos projetos no GitHub: <a href="https://github.com/engestore" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>

        <div className="contact-option">
        <h3><FontAwesomeIcon icon={faSquareInstagram} /></h3>
          <p>Siga-nos no Instagram: <a href="https://instagram.com/engestore" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>

        <div className="contact-option">
        <b> <h2><FontAwesomeIcon icon={faYoutube}/></h2></b>
          <p>Assista nossos vídeos no YouTube: <a href="https://youtube.com/engestore" target="_blank" rel="noopener noreferrer">YouTube</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
