import axios from 'axios'
import React,{useEffect} from 'react'
import TokenExpire from "../.././helpers/TokenExpire";

const Dummy = () => {

    const dummy = async()=>{
        try {
            const data = JSON.parse(localStorage.getItem("userInfo"));
        console.log(data.accessToken);
             const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}`, {
      headers: {
       Authorization : `Bearer ${data.accessToken}`
      },
    });
    console.log(res);
        } catch (error) {
            if(error.response.data.error.message){
               TokenExpire();
            }
            // 
        }
    
    }

    useEffect(()=>{
        dummy();
    },[]);
  return (
    <>
        data
    </>
  )
}

export default Dummy