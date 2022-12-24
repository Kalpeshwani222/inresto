import axios from "axios";

export const getAllMenuItems = () => async(dispatch) =>{
    dispatch({type:'GET_MENU_REQUEST'})
    try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/menu`)
        // console.log(res);
        dispatch({type:'GET_MENU_SUCCESS',payload:res.data})
    } catch (error) {
        dispatch({type:'GET_MENU_FAIL',payload:error})
    }
}