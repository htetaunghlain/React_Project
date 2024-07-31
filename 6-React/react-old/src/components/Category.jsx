import React from "react";

import CategoryButton from "./CategoryButton";
import Container from "./Container";

const Category = () => {
  const title = "Product Categories";
  const Categories = [
    
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <div id="category-section" className="p-5">
      <Container>
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <div className=" flex overflow-scroll category-button ">
        <CategoryButton name="All" current={true} />
        {Categories.map((category) => (
          <CategoryButton
            key={category}
            name={category}
            
            
          />
        ))}
      </div>
      </Container>
    </div>
  );
};

export default Category;
