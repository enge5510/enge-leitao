import React from 'react';
import { Link } from 'react-router-dom';
import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';

function Product({ 
  id, 
  image, 
  name, 
  rate, 
  price, 
  addProductTocart,
}) {
  const controls = useAnimation();

  const handleAddToCart = async () => {
    await controls.start({
      scale: 1.2,
      transition: { duration: 0.2 },
    });

    await controls.start({
      scale: 1,
      transition: { duration: 0.2 },
    });

    addProductTocart(id);
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rate">
        &#9733;&#9733;&#9733;&#9733;&#9734;
      </p>
      <p className="price">{price} <span>Mzn</span></p>
    
      <div className="buttons">
        <Link to="/products/123/checkout" className="btn-icon">
          <span>Buy Now</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>

        <motion.button 
          onClick={handleAddToCart}
          className="btn-icon add-to-cart-btn"
          animate={controls}
        >
          <span>Add To Cart</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </motion.button>
      </div>
    </div>
  );
}

export default Product;
