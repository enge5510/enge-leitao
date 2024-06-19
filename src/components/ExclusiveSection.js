

import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Smart Band 4</h2>
            <p>O Mi Smart band 4 tela AMOLED 39.9% maior que o Mi Band 3
              tela completamente digital com brilho ajustável, de tal modo que
              tudo é claro ao máximo.
              <Link to="/products" className="promotion-btn">
                <span>Promoções</span>
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </Link>
            </p>
          </div>
         <div className="right-side">
          <img src="/images/exclusive.png" alt="Smart Band 4" />
        </div>
        </div>

      </div>
    </div>
  );
}
