import React, { useState } from 'react';


function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();

    setMessage ('Verifique o e-mail enviado no teu Inbox .') ;
  };

  return (
    <div className="forgot-password-container">
      <h2><p>Esqueceu a Senha?</p></h2>
      <form onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label htmlFor="email"> E-mail :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Redefinir Senha</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
