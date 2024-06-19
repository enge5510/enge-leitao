import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ConfirmationPage() {
  const [message, setMessage] = useState('');
  const { token } = useParams();

  useEffect(() => {
    // Aqui você faria uma requisição ao seu back-end para verificar o token
    // e confirmar o registro do usuário.
    // Se o token for válido, você pode exibir uma mensagem de confirmação.
    // Caso contrário, você pode exibir uma mensagem de erro.
    // Por enquanto, vamos simular essa lógica com um temporizador.

    const verifyToken = () => {
      setTimeout(() => {
        if (token === 'valid_token') {
          setMessage('Registro confirmado com sucesso!');
        } else {
          setMessage('Token inválido. Registro não confirmado.');
        }
      }, 2000);
    };

    verifyToken();
  }, [token]);

  return (
    <div className="confirmation-container">
      <h2>Confirmação de Registro na loja ENGE STORE</h2>
      <p>{message}</p>
    </div>
  );
}

export default ConfirmationPage;
