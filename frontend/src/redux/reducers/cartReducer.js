// export const cartReducer = (state = { cartItems: [] }, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const alreadyExists = state.cartItems.find(
//         (item) => item._id === action.payload._id
//       );

//       if (alreadyExists) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((item) =>
//             item._id === action.payload._id ? action.payload : item
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, action.payload],
//         };
//       }

//     case "DELETE_FROM_CART":
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (item) => item._id !== action.payload._id
//         ),
//       };

//     default:
//       return state;
//   }
// };

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    
    case "ADD_TO_CART":
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, temp],
        };
      }

    case "DELETE_FROM_CART":
      const data = state.cartItems.filter((ele) => ele._id !== action.payload);

      return {
        ...state,
        cartItems: data,
      };

    case "REMOVE_SINGLE_ITEM":
      const itemIndex_dec = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItems[itemIndex_dec].quantity >= 1) {
        console.log("yes qun greater than 1");
        const dltitem = (state.cartItems[itemIndex_dec].quantity -= 1);
        console.log([...state.cartItems, dltitem]);

        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else if (state.cartItems[itemIndex_dec].quantity === 1) {
        const data = state.cartItems.filter(
          (ele) => ele._id !== action.payload
        );

        return {
          ...state,
          cartItems: data,
        };
      }

    default:
      return state;
  }
};
