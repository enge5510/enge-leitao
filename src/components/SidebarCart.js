import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faBars, faMoneyBill, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarProduct from './SidebarProduct';

export default function Sidebarcart({
    setShowSidebarcart,
    showSidebarcart,
    selectedProducts,
    cartTotal,
    removeProductFromcart,
    addTocartTotal,
}) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        setShowSidebarcart(false);
        navigate('/cart/checkout');
    };

    return (
        <aside className={`sidebar-cart ${showSidebarcart ? "show" : ""}`}>
            <div className="top">
                <h3><b>Carrinho</b></h3>
                <div className="Cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <button onClick={() => setShowSidebarcart(false)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <div className="sidebar-products-list">
                {selectedProducts.map((product) => (
                    <SidebarProduct key={product.id}
                        {...product}
                        removeProductFromcart={removeProductFromcart}
                        addTocartTotal={addTocartTotal}
                    />
                ))}
            </div>

            {cartTotal === 0 ? (
                <i>Carrinho Vazio <p>
                   <p><b>
                    Adicione Aqui o teu Produto
                    </b>
                    </p> 
                    </p> </i>
            ) : (
                <div className="total-container">
                    <b>Total: </b> {cartTotal} Mzn
                    <button onClick={handleCheckout} className="btn-icon">
                        <span>Pagar</span>
                        <FontAwesomeIcon icon={faMoneyBill} />
                    </button>
                </div>
            )}
        </aside>
    );
}
