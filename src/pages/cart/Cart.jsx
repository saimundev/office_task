import React, { useContext, useEffect, useState } from "react";
import { CreateCartContext } from "../../context/CartContext";
import DeleteIcon from "../../components/Icons/DeleteIcon";

const Cart = () => {
  const { shoppingCart, dispatch } = useContext(CreateCartContext);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const price = shoppingCart?.cartItem.reduce(
      (totalPrice, currentPrice) =>
        totalPrice + Number(currentPrice.price * currentPrice.qty),
      0
    );
    setTotalPrice(price);
  }, [shoppingCart.cartItem]);
  return (
    <div className="container mx-auto">
      {shoppingCart.cartItem?.length ? (
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  DELETE
                </th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart?.cartItem?.map((item) => (
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[150px] h-[100px] object-fill"
                    />
                  </th>
                  <td class="px-6 py-4">{item.title}</td>
                  <td class="px-6 py-4">{item.price * item.qty}</td>
                  <td class="px-6 py-4 space-x-2">
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREMENT", payload: item.id })
                      }
                      className="px-4 py-1 text-white bg-green-500 rounded"
                    >
                      +
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREMENT", payload: item.id })
                      }
                      className="px-4 py-1 text-white bg-green-500 rounded"
                    >
                      -
                    </button>
                  </td>
                  <td class="px-6 py-4 ">
                    <div
                      className=""
                      onClick={() =>
                        dispatch({ type: "REMOVE_CART", payload: item.id })
                      }
                    >
                      <DeleteIcon className="text-red-500 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-10 text-xl font-bold text-center">Cart Is Empty</div>
      )}

      {shoppingCart?.cartItem.length ? (
        <div className="flex justify-end mt-10">
          <div className="">
            <h3 className="text-xl font-bold">
              Total Price: {totalPrice?.toFixed(2)}
            </h3>
            <div className="flex justify-end">
              <button className="px-4 py-2 mt-4 font-medium text-white bg-indigo-500 rounded-lg">
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
