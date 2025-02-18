import React from "react";

const categories = ["Electronics", "Fashion", "Home Appliances", "Books", "Grocery"];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
