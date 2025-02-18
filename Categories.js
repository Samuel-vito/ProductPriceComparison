import React from "react";
const Categories = () => (
  <div className="categories">
    {["Electronics", "Fashion", "Home Appliances", "Books", "Grocery"].map((cat) => (
      <button key={cat}>{cat}</button>
    ))}
  </div>
);
export default Categories;
