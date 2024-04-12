import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Product.css';

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="card-container">
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`} className="card">
          <img src={product.thumbnail} alt={product.title} />
          <div className="card-content">
            <h4 className="card-title">{product.title}</h4>
            <p className="card-price">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductComponent;
