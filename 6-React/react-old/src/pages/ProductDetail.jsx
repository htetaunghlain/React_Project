import React from "react";
import { useParams } from "react-router-dom";
import Products from "../data/data";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);

  const currentProduct = Products.find((product) => product.id == productId);

  return (
    <Container>
      <Breadcrumb currentPageTitle= "Product Detail"/>
      <div className=" border border-black p-10">
        <div className="grid grid-cols-2 ">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className=" w-3/4 block mx-auto"
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col items-start gap-5">
            <h3 className=" text-3xl font-bold ">{currentProduct.title}</h3>
            <p className=" bg-gray-200 text-gray-700 inline-block px-5 py-1 ">{currentProduct.category}</p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate}/>
            <div className="flex justify-between w-full items-center ">
              <p>Price : {currentProduct.price}</p>
              <button className=" text-sm border px-3 py-1 border-black">
          Add Cart
        </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
