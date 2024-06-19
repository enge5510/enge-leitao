import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1><span>Sobre</span> N<i>ó</i>s</h1>
       <b> <p>Transformando Visões em Realidade</p></b>
      </header>
      <section className="about-section">
        <div className="about-content">
          <h2>Nossa História</h2>
          <p>
            Fundada em <b>01/01</b> [ano de fundação <b>2012</b>], a ENGE<span>STORE</span> nasceu com a missão de fornecer produtos de qualidade excepcional. 
            Ao longo dos anos, nos tornamos líderes de mercado graças ao nosso compromisso com a inovação e a satisfação do cliente.
          </p>
        </div>
        <div className="about-content">
          <h2>Missão e Visão</h2>
          <p>
            Nossa missão é transformar as indústrias, fornecendo soluções que atendem às necessidades de um mercado em constante evolução. 
            Visamos ser referência em excelência e integridade, oferecendo produtos que realmente fazem a diferença.
          </p>
        </div>
        <div className="about-content">
          <h2>Nossos Valores</h2>
          <ul>
            <li>Inovação Contínua</li>
            <li>Compromisso com a Qualidade</li>
            <li>Integridade e Transparência</li>
            <li>Satisfação do Cliente</li>
          </ul>
        </div>
      </section>
      <section className="about-team">
        <h2>Conheça Nossa Equipe</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/team-member-1.jpg" alt="Membro da equipe 1" />
            <h3>Nome do Membro</h3>
            <p>Posição</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member-2.jpg" alt="Membro da equipe 2" />
            <h3>Nome do Membro</h3>
            <p>Posição</p>
          </div>
          <div className="team-member">
            <img src="/images/team-member-3.jpg" alt="Membro da equipe 3" />
            <h3>Nome do Membro</h3>
            <p>Posição</p>
          </div>
        </div>
      </section>
      <section className="about-contact">
        <h2>Entre em Contato</h2>
        <p>Estamos sempre prontos para ouvir você. Entre em contato conosco para saber mais sobre nossos produtos e serviços.</p>
        <button className="contact-button">
             <b><a href="https://wa.me/258867005588" target="_blank" rel="noopener noreferrer">
             <qb><FontAwesomeIcon icon={faPhone} /></qb>
             Fale Conosco</a></b>
        </button>
      </section>
    </div>
  );
};

export default About;