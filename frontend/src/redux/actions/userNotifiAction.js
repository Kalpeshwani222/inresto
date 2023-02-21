import axios from "axios";

export const getUserNotifications = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "USER_NOTIFICATION_REQUEST" });
    const currentUser = getState().LoginUserReducer.userInfo;
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/notification/orderstatus/${currentUser._id}`
    );

    dispatch({ type: "USER_NOTIFICATION_SUCCESS", payload: res.data });
  } catch (error) {
    // console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: "USER_NOTIFICATION_FAIL",
      payload: message,
    });
  }
};
