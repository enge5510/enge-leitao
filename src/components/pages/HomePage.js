import React from 'react';
import Header from '../Header';
import ProductsList from '../ProductsList';
import ExclusiveSection from '../ExclusiveSection';
import TestimonialsList from '../TestimonialsList';

export default function HomePage({ 
  products, 
  addProductTocart,
  setSelectedProducts,
}) {
  return (
    <div>
      <Header /> 
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Promocoes</h3>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <ProductsList 
            setSelectedProducts={setSelectedProducts}
            addProductTocart={addProductTocart}
            products={products} 
          /> 
        </div>
      </div>
      <ExclusiveSection />
      <TestimonialsList />
    </div>
  );
}
