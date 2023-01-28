import {
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
  CLEAR_ERRORS,
} from "./../constants/productConstants";

export const getAllItemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_MENU_REQUEST:
      return {
        loading: false,
        items: [],
      };

    case GET_MENU_SUCCESS:
      return {
        loading: false,
        items: action.payload,
      };

    case GET_MENU_FAIL:
      return {
        error: action.payload,
        loading: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//     //filter
// export const getFilterItemsReducer = (state=items, action) =>{
//     switch(action.type){

//             // case 'CATEGORY_FILTER':
//             //     console.log(state.items);

//         default: return state
//     }

// }
//     export const getAllItemsReducer = (state = items, action) =>{
//     switch(action.type){
//         case 'CATEGORY_FILTER':
//             console.log(state.items);

//         default: return state
//     }

// }

//      case 'CATEGORY_FILTER':
//                 const filterList = state.items;
//                 const {id,name} = action.payload;
//                 let x = [];

// x= filterList ? filterList.filter(element => element.category === name) : [];
// console.log(x);
// console.log(state.items);
