import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function CheckoutPage({ selectedProducts, cartTotal, projectId }) {
  const navigate = useNavigate();

  const handlePayClick = () => {
    if (selectedProducts.length > 0) {
      console.log(`Project ID: ${projectId}`);
      navigate('/cart/checkout', { state: { projectId } });
    }
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Pagamento</h2>
      {selectedProducts.length === 0 ? (
        <div className="empty-cart">
          <p>Carrinho Vazio</p>
          <Link to="/" className="back-link">
            Voltar
            <b><FontAwesomeIcon icon={faRightToBracket} /></b>
          </Link>
        </div>
      ) : (
        <div className="cart-items">
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price} Mzn
              </li>
            ))}
          </ul>
          <div className="total">
            <b>Total: </b> {cartTotal} Mzn
          </div>
          <button className="pay-button" onClick={handlePayClick}>Pagar</button>
        </div>
      )}
    </div>
  );
}
