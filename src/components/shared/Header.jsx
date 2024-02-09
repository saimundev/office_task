import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import { CreateCartContext } from "../../context/CartContext";

const Header = () => {
  const { shoppingCart } = useContext(CreateCartContext);
  const totalQuantity =
    shoppingCart?.cartItem?.length &&
    shoppingCart?.cartItem?.reduce(
      (acc, currentQty) => acc + currentQty?.qty,
      0
    );
  return (
    <div className="bg-indigo-500">
      <div className="container flex items-center justify-between py-3 mx-auto">
        {/* logo */}
        <div className="text-xl font-bold text-white">E-SHOP</div>
        <div className="flex gap-6">
          <Link to="/" className="text-sm font-semibold text-white">
            Home
          </Link>
          <Link to="/cart">
            <div className="relative">
              <CartIcon className="text-white" />
              <div className="-top-2 left-3 absolute flex items-center justify-center w-5 h-5 bg-white rounded-full">
                {totalQuantity}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
