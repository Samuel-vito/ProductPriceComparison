import React from "react";

const Results = ({ products, handleCompare }) => {
  return (
    <div className="results-grid">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              Buy from {product.store}
            </a>
            <button onClick={() => handleCompare(product)}>Compare</button>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Results;