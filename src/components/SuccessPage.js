import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
  return (
    <div className="success-page">
      <h2>Pagamento feito com sucesso!</h2>
      <Link to="/">Voltar para a loja</Link>
    </div>
  );
}
