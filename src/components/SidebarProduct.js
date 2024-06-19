import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function SidebarProduct({ id, image, name, rate, price, removeProductFromcart, addTocartTotal }) {
  const [quantity, setQuantity] = useState(1);
  const [priceSum, setPriceSum] = useState(price);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      return;
    }

    setQuantity(newQuantity);
    const newPriceSum = newQuantity * price;
    addTocartTotal(newPriceSum - priceSum);
    setPriceSum(newPriceSum);
  };

  return (
    <div className="sidebar-product">
      <div className="left-side">
        <button
          className="remover-product-btn"
          onClick={() => {
            removeProductFromcart(id);
            addTocartTotal(-priceSum);
          }}
        >
          <FontAwesomeIcon icon={faBackspace} />
        </button>
        
        <div className="details">
          <h4>{name}</h4>
          <p>{price} Mzn</p>
          <input
            type="number"
            min={1}
            max={10000}
            value={quantity}
            onChange={handleQuantityChange}
          />
          {priceSum > price && (
            <p className="price-sum">
              <b>Soma:</b>
              {priceSum} Mzn
            </p>
          )}
        </div>
      </div>

      <div className="right-side">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
