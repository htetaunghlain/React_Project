import React from "react";

const CategoryButton = (props) => {
  return (
    <button
      className= "border text-nowrap border-black px-4 py-2 me-2"
    >
      {props.name}
    </button>
  );
};

export default CategoryButton;
