import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import { Widget, addResponseMessage } from 'react-chat-widget';
import Sidebarcart from './components/SidebarCart';
import CheckoutPage from './components/pages/CheckoutPage';
import SuccessPage from './components/SuccessPage';
import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import LoginPage from './components/pages/LoginPage';
import UsersPage from './components/pages/UsersPage';
import BlogPost from './components/BlogPost'
import Contact from './components/Contact';
import Cupons from './components/Cupons';
import Affiliate from './components/Affiliate';
import About from './components/About';
import 'react-chat-widget/lib/styles.css';
import './index.css';


function App() {
    const [products, setProducts] = useState([]);
    const [showSidebarcart, setShowSidebarcart] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [showAssistant, setShowAssistant] = useState(false);

    const projectId = 'enge store 1.0.0';

    const addTocartTotal = (value) => setCartTotal(cartTotal + value);

    useEffect(() => {
        fetch("/db.json")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);

    const addProductTocart = (id) => {
        const productToAdd = products.filter((product) => product.id === id)[0];
        if (selectedProducts.includes(productToAdd)) return;
        setSelectedProducts(selectedProducts.concat(productToAdd));
        setCartTotal(cartTotal + productToAdd.price);
    };

    const removeProductFromcart = (id) => {
        setSelectedProducts((prevSelectedProducts) =>
            prevSelectedProducts.filter(product => product.id !== id)
        );
        const productToRemove = products.find(product => product.id === id);
        if (productToRemove) {
            setCartTotal((prevCartTotal) => prevCartTotal - productToRemove.price);
        }
    };

    const handleNewUserMessage = async (newMessage) => {
        addResponseMessage(`Olá: ${newMessage}`);
        console.log(`Project ID: ${projectId}`);
    };

    return (
        <Router>
            <div className="App">
                <Navbar
                    setSelectedProducts={setSelectedProducts}
                    selectedProducts={selectedProducts}
                    setShowSidebarcart={setShowSidebarcart}
                    showAssistant={showAssistant}
                    toggleAssistant={() => setShowAssistant(prevState => !prevState)}
                />
                <Sidebarcart
                    setShowSidebarcart={setShowSidebarcart}
                    showSidebarcart={showSidebarcart}
                    selectedProducts={selectedProducts}
                    cartTotal={cartTotal}
                    removeProductFromcart={removeProductFromcart}
                    addTocartTotal={addTocartTotal}
                />
                <main>
                    <Routes>
                        <Route path="/"
                            element={
                                <HomePage
                                    addTocartTotal={addTocartTotal}
                                    removeProductFromcart={removeProductFromcart}
                                    setSelectedProducts={setSelectedProducts}
                                    selectedProducts={selectedProducts}
                                    addProductTocart={addProductTocart}
                                    products={products}
                                    setShowSidebarcart={setShowSidebarcart}
                                    showSidebarcart={showSidebarcart}
                                    showAssistant={showAssistant}
                                    cartTotal={cartTotal}
                                    toggleAssistant={() => setShowAssistant(prevState => !prevState)}
                                />
                            }
                        />
                        <Route path="/products"
                            element={<ProductsPage products={products} addProductTocart={addProductTocart} />}
                        />
                        <Route path="/cart/checkout"
                            element={<CheckoutPage selectedProducts={selectedProducts} cartTotal={cartTotal} projectId={projectId} />}
                        />
                        <Route path="/checkout/success" element={<SuccessPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/users" element={<UsersPage />} 
                        />
                         <Route path="/contact" element={<Contact />} />
                             <Route path="/blog" element={<BlogPost />} />
                               <Route path="/Cupons" element={<Cupons />} />
                              <Route path="/affiliate" element={<Affiliate/>} 
                              />
                                <Route path="/about" element={<About/>} />
                    </Routes>
                </main>
                <Footer />

                {showAssistant && (
                    <Widget
                        handleNewUserMessage={handleNewUserMessage}
                        title="Assistente Enge Store"
                        subtitle="Olá, estou aqui para ajudar-te"
                        senderPlaceHolder="Texto..."
                    />
                )}
            </div>
        </Router>
    );
}

export default App;
