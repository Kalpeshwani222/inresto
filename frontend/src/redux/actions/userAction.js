import axios from "axios";

export const registerUser = (name, email, password) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const config = {
      Headers: {
        "Content-type": "applications/json",
      },
    };

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/user/register`,
      { name, email, password },
      config
    );
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: res });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const logout =() => async (dispatch)=>{
        localStorage.removeItem("userInfo");
        dispatch({type:"USER_LOGOUT"});
    };


export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const config = {
      Headers: {
        "Content-type": "applications/json",
      },
    };

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/auth/user/login`,
      {
        email,
        password,
      },
      config
    );
    var data = res.data;

    //add the one new field in localstorage
     Object.assign(data,{"tableNo":""});

    // console.log(data);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    window.location.href = "/";
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error,
    });
  }
};
