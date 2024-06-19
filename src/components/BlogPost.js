import React from 'react'

export default function BlogPost() {
  return ( <div className="blog-post">
      <header>
        <h1>Guia de  Subscricao</h1>
      </header>
      <main>
        <article>
          <section className="introduction">
            <p>Se você está procurando uma maneira fácil e rápida de se inscrever na Enge Store, está no lugar certo! Este guia passo a passo vai ajudá-lo a criar sua conta e começar a aproveitar todas as vantagens que a loja oferece. Vamos lá!</p>
          <img src="images/tela.png" alt="tela" />
          </section>
          <section className="content">
            <h2>Passos para Subscrever-se
              <img src="/images/guia.png" alt="guia" />
            </h2>
            <h3>1. Acesse o Site da Enge Store</h3>
            <p>Primeiro, abra seu navegador e digite o endereço da Enge Store: <a href="http://www.engestore.com" target="_blank" rel="noopener noreferrer">www.engestore.com</a>. Assim que a página inicial carregar, você estará pronto para iniciar o processo de inscrição.</p>
            <h3>2. Localize o Botão de Inscrição</h3>
            <p>Na página inicial, procure pelo botão "Inscrever-se" ou "Registrar". Normalmente, ele está localizado no canto superior direito da tela. Clique nesse botão para começar.</p>
            <h3>3. Preencha o Formulário de Inscrição</h3>
            <p>Você será direcionado para uma página com um formulário de inscrição. Preencha todas as informações solicitadas, como:</p>
            <ul>
              <li>Nome Completo</li>
              <li>Endereço de E-mail</li>
              <li>Senha (crie uma senha segura e fácil de lembrar)</li>
              <li>Confirmação de Senha</li>
            </ul>
            <p>Certifique-se de que todas as informações estão corretas antes de prosseguir.</p>
            <h3>4. Aceite os Termos e Condições</h3>
            <p>Leia os termos e condições da Enge Store e, se estiver de acordo, marque a caixa indicando que você aceita os termos. Isso é necessário para concluir a inscrição.</p>
            <h3>5. Confirme seu E-mail</h3>
            <p>Após preencher o formulário e aceitar os termos, clique no botão "Enviar" ou "Registrar". Em seguida, verifique sua caixa de entrada de e-mail para um e-mail de confirmação da Enge Store. Clique no link de confirmação para ativar sua conta.</p>
            <h3>6. Complete seu Perfil</h3>
            <p>Após confirmar seu e-mail, volte ao site da Enge Store e faça login com seu endereço de e-mail e senha. Complete seu perfil fornecendo informações adicionais, como endereço e número de telefone, para facilitar futuras compras.</p>
            <h3>7. Navegue e Aproveite</h3>
            <p>Pronto! Agora você está inscrito na Enge Store. Navegue pelo site, explore os produtos e aproveite as ofertas exclusivas disponíveis para membros.</p>
          </section>
          <section className="conclusion">
            <p>Inscrever-se na Enge Store é um processo simples e direto. Com este guiao passo a passo, você pode criar sua conta em poucos minutos e começar a aproveitar todas as vantagens que a loja oferece. Se tiver alguma dúvida, deixe um comentário abaixo ou entre em contato com o suporte da Enge Store. Boas compras!</p>
          </section>
        </article>
        <section className="comments">
          <h2>Comentários</h2>
          <form action="#" method="post">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="comment">Comentário:</label>
            <textarea id="comment" name="comment" rows="4" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      </div>
  );
}
