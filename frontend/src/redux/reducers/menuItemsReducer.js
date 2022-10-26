export const getAllItemsReducer = (state = {items:[]}, action) =>{
    switch(action.type){
        case 'GET_MENU_REQUEST':
            return{
                ...state,
                loading:true,
            }

        case 'GET_MENU_SUCCESS':
            return{
                items: action.payload,
                loading:false,
            }

        case 'GET_MENU_FAIL':
            return{
                error : action.payload,
                loading:false,
            }

        default: return state
    }
}