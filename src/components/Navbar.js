import { faBars, faRobot, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({
    setShowSidebarcart, 
    selectedProducts,
    toggleAssistant,
    setShowAssistant,
}) {
    const [show, setShow] = useState(false);

    return (
        <div className="nav">
            <div className="inner-content">
                <h1 className="logo">
                    ENGE<span>STORE</span>
                </h1>
                <nav className={`${show && "show"}`}>
                    <ul>
                        <li className="inner-content init">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="inner-content feed"> 
                            <Link to="/feed">Feed</Link>
                        </li>
                        <li className="inner-content plus"> 
                            <Link to="/plus">Plus</Link>
                        </li>
                        <li className="inner-content ChoiceDay">
                            <Link to="/ChoiceDay">ChoiceDay</Link>
                        </li>
                    </ul>
                </nav>
                <div className="navs-icon-container">
                    <div className="search-input-container">
                        <input type="search" placeholder="procurar ..."/>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <button className="shopping-cart" onClick={() => setShowSidebarcart(true)} >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <div className="products-count">{selectedProducts.length}</div>
                    </button>
                    <button className="menu-button" onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <button 
                        className="assistant-button" 
                        onClick={toggleAssistant}
                    >
                        <FontAwesomeIcon icon={faRobot} />
                        <p><b>Assist</b></p>
                    </button>
                </div>
            </div>
        </div>
    );
}

