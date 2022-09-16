import axios from "axios";

export const getAllMenuItems = () => async(dispatch) =>{
    dispatch({type:'GET_MENU_REQUEST'})
    try {
        const res = await axios.get('/api/menu')
        console.log(res);
        dispatch({type:'GET_MENU_SUCCESS',payload:res.data})
    } catch (error) {
        dispatch({type:'GET_MENU_FAIL',payload:error})
    }
}