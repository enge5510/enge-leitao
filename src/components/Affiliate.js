import React from 'react';


const AffiliatePage = () => {
  return (
    <div className="affiliate-page">
      <div className="container">
        <h1>Torne-se um Afiliado</h1>
        <p>
          Junte-se ao nosso Programa de Afiliados e comece a ganhar dinheiro promovendo nossos produtos.
        </p>

        <div className="steps">
          <h2>Como Funciona</h2>
          <ol>
            <li>Inscreva-se no nosso programa de afiliados.</li>
            <li>Receba seu link de afiliado único.</li>
            <li>Compartilhe seu link e comece a ganhar comissões.</li>
          </ol>
        </div>

        <div className="benefits">
          <h2>Benefícios</h2>
          <ul>
            <li>Ganhe comissões atrativas por cada venda realizada.</li>
            <li>Receba suporte dedicado da nossa equipe de afiliados.</li>
            <li>Acesso a materiais de marketing de alta qualidade.</li>
          </ul>
        </div>

        <div className="test">
          <h2>Depoimentos de Afiliados</h2>
          <div className="testi">
            <p>"Estou muito feliz por fazer parte do programa de afiliados. Os ganhos são ótimos e o suporte é excelente!"</p>
            <p>- João Silva</p>
          </div>
          <div className="testi">
            <p>"Nunca pensei que seria tão fácil ganhar dinheiro online. O programa de afiliados da Empresa X mudou minha vida!"</p>
            <p>- Maria Souza</p>
          </div>
        </div>

        <div className="signup-form">
          <h2>Inscreva-se Agora</h2>
          <for>
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu Email" />
          <div>  <button type="submit">Enviar</button></div>
          </for>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePage;
