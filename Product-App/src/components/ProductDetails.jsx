import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { selectedProducts , removeSelectedProduct } from "../redux/actions/productActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetail.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://dummyjson.com/products/${productId}`)
      .catch((err) => {
        console.log("error", err);
      });
    console.log("resp", response.data);
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return()=>{
      dispatch(removeSelectedProduct())
    }
  }, [productId]);

  return (
    <div className="container mx-auto product-details">
      <section className="py-16 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="card-container">
          {Object.keys(product).length === 0 ? (
            <div>...loading</div>
          ) : (
            <div className="card">
              <img src={product.thumbnail} alt={product.title} />
              <div className="card-content">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-price">${product.price}</p>
                <p className="card-description">{product.description}</p>
                {product.discountPercentage && (
                  <p className="card-discount">
                    Discount: {product.discountPercentage}%
                  </p>
                )}
                <p className="card-rating">Rating: {product.rating}</p>
                <p className="card-brand">Brand: {product.brand}</p>
                <p className="card-category">Category: {product.category}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
