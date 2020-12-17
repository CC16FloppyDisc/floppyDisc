import React, { useState, useEffect } from "react";
import Product from "./Product";
import SearchBar from "./SearchBar";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState();

  const getProducts = () =>
    axios.get("/items").then(res => {
      setProducts(res.data);
      setFilteredProducts(res.data);
    });
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <SearchBar
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        setProducts={setProducts}
      />

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}>
        <Masonry>
          {filteredProducts &&
            filteredProducts.map(product => (
              <Product product={product} key={product.id} />
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ProductList;
