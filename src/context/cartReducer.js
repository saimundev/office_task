import toast, { Toaster } from "react-hot-toast";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDTO_CART":
      const existInCartItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (!existInCartItem) {
        toast.success("Successfully Added To Cart!");
        return {
          ...state,
          cartItem: [...state.cartItem, { ...action.payload, qty: 1 }],
        };
      } else {
        toast.success("Cart Is Increment");
        return {
          ...state,
          cartItem: state.cartItem.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }

    case "REMOVE_CART":
      toast.error("Remove From Cart");
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT":
      toast.success("Cart Is Increment");
      return {
        ...state,

        cartItem: state.cartItem.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREMENT":
      toast.success("Cart Is Decrement");
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
