import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="page-inner-content content">
        <div className="download-options">
          <p>Baixe o nosso aplicativo</p>
          <p>Baixe a nossa aplicação para Android e IOS</p>
          <div>
            <img src="/images/app-store.png" alt="app store download" />
            <img src="/images/play-store.png" alt="play store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            ENGE<span>STORE</span>
          </h1>
          <p>Nosso objectivo é trazer produtos de qualidade ao cliente</p>
        </div>

        <div className="links">
          <h3>Links úteis</h3>
          <ul>  

            <li>
              <Link to="/cupons">Cupons</Link>
            </li>
             <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/blog">Blog posts</Link>
            </li>
            <li>
              <Link to="/">Políticas</Link>
            </li>
            <li>
              <Link to="/affiliate">Torne-se Affiliado</Link> 
            </li>
            <li>
              <Link to="/termrs and service">Termos e serviços</Link>
            </li>
             <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>

          <div className="login-page">
            <h4>Registe<span>- se</span><b>Aqui</b></h4>
            <ul>
              <li className="inner-content-plus"> 
                <Link to="/register">Sign</Link>
              </li>
              <li className="inner-content-ChoiceDay">
                <Link to="/forgot-password">Reset</Link>
              </li>
              <li className="inner-content-feed">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cartao-de-pagamento">
        <p>Pagamentos</p>
        <div>
          <img src="/images/cartao-de-pagamento.jpg" alt="Cartoes de pagamentos"/>
        </div>
      </div>

      <div className="page-inner-content">  
        <hr />
        <p className="copyright">Copyright © 2012 - 2024 Enge Store Inc All rights reserved</p>
      </div>
    </footer>
  );
}
