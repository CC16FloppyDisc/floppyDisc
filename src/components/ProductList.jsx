import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState();

  const getProducts = () =>
    axios.get("/item/").then(res => setProducts(res.data));
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="product-list-wrapper">
      {products &&
        products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
};

export default ProductList;
