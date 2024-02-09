import React, { useContext, useEffect, useState } from "react";
import { CreateCartContext } from "../../context/CartContext";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { dispatch } = useContext(CreateCartContext);

  //product data calling from api
  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        setError("something went wrong");
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (isLoading)
    return (
      <h3 className="text-base font-semibold text-center mt-10">Loading...</h3>
    );
  if (error)
    return (
      <h3 className="text-red-500 text-base font-semibold text-center mt-10">
        {error}
      </h3>
    );
  return (
    <div className="container mx-auto grid grid-cols-5 gap-6 mt-10">
      {product.map((item) => (
        <div className="border border-gray-200 rounded-lg shadow p-2 grid content-between hover:scale-105 duration-300 ">
          <img
            src={item.image}
            alt="product_image"
            className=" h-[300px] object-fill"
          />
          <h2 className="text-base font-semibold mt-4">{item.title}</h2>
          <h3 className="text-base font-semibold mt-2">Price:{item.price}</h3>
          <button
            onClick={() => dispatch({ type: "ADDTO_CART", payload: item })}
            className="w-full bg-indigo-500 text-white py-2 rounded-lg mt-4"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
