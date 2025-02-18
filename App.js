import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import ProductList from "./ProductList";
import "./ProductComparison.css";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = (query) => {
    const mockResults = [
      { name: query, price: "₹999", store: "Amazon", image: "https://via.placeholder.com/150" },
      { name: query, price: "₹1050", store: "Flipkart", image: "https://via.placeholder.com/150" },
      { name: query, price: "₹970", store: "Snapdeal", image: "https://via.placeholder.com/150" },
    ];
    setProducts(mockResults);
  };

  return (
    <div className="container">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Categories />
      <ProductList products={products} />
    </div>
  );
};

export default App;