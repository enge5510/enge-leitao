import React from 'react';
import ProductsList from '../ProductsList';

export default function ProductsPage({ products,  addProductTocart}) {
  return (      
    <div className="page-inner-content">
      <div className="section-title">
        <h3><span>No</span>vidades</h3>
        <div className="underline"></div>
      </div>

      <div className="main-content">
        <ProductsList products={products} 
         addProductTocart={addProductTocart}
         />
      </div>
    </div>
  
  );
}
