import axios from "axios";

export const getAllMenuItems = (currentPage=1,price = [0,1000],category) => async(dispatch) =>{
    dispatch({type:'GET_MENU_REQUEST'})
    try {
        let link = `${process.env.REACT_APP_SERVER_URL}/api/menu?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

        if(category){
             link = `${process.env.REACT_APP_SERVER_URL}/api/menu?page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
        }
        const {data} = await axios.get(link)
        //  console.log(data);
        dispatch({type:'GET_MENU_SUCCESS',payload:data})
    } catch (error) {
        dispatch({type:'GET_MENU_FAIL',payload:error})
    }
}


export const categoryFilter = (data) =>{
    return{
        type:"CATEGORY_FILTER",
        payload:data,
    }
    // console.log(data);
}