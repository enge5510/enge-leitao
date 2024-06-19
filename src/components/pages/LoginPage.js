import { faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      navigate('/');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} className="icon" /> Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FontAwesomeIcon icon={faUnlockKeyhole} className="icon" /> Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
        {error && <p className="error">{error}</p>}
      </form>
      <div className="login-links">
        <Link to="/forgot-password">
          <FontAwesomeIcon icon={faUnlockKeyhole} className="icon" /> Esqueceu a senha?
        </Link>
        <Link to="/register">
          <FontAwesomeIcon icon={faUser} className="icon" /> Registo
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
