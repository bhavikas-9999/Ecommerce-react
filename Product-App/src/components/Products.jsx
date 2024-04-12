import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

function ProductsList() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      dispatch(setProducts(response.data.products));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <section className="py-16 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ProductComponent />
      </section>
    </div>
  );
}

export default ProductsList;
