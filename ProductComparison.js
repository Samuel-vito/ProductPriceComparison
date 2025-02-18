import React, { useState } from "react";
import "./ProductComparison.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Results from "./Results";

const ProductComparison = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const fetchMockData = (query) => {
    const mockResults = [
      { name: query, price: "₹999", store: "Amazon", url: "#", image: "https://via.placeholder.com/150" },
      { name: query, price: "₹1050", store: "Flipkart", url: "#", image: "https://via.placeholder.com/150" },
      { name: query, price: "₹970", store: "Snapdeal", url: "#", image: "https://via.placeholder.com/150" },
    ];
    setProducts(mockResults);
  };

  const handleCompare = (product) => {
    // Check if the product is already selected
    if (!selectedProducts.some((p) => p.name === product.name)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="banner">Advertisement Banner</div>

      <div className="content">
        <Sidebar />
        <main className="main-content">
          <SearchBar onSearch={fetchMockData} />
          <Results products={products} handleCompare={handleCompare} />
        </main>
        <div className="sidebar profile">Profile Section</div>
      </div>

      <div className="compare-section">
        {selectedProducts.length > 0 ? (
          selectedProducts.map((p) => (
            <div key={p.name} className="compare-card">
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <p>{p.store}</p>
            </div>
          ))
        ) : (
          <p>No products selected for comparison.</p>
        )}
      </div>
    </div>
  );
};

export default ProductComparison;