import React from "react";

function CategoryFilter({ categories, onCategoryFilter, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
      <button 
      key={category} 
      onClick={() => onCategoryFilter(category)}
      className={selectedCategory === category ? "selected" : ""}
      >
        {category}
      </button>))}
    </div>
  );
}

export default CategoryFilter;
