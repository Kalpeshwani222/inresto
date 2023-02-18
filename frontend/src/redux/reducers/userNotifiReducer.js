export const userNotificationsReducer = (state = { userNoti: [] }, action) => {
  switch (action.type) {
    case "USER_NOTIFICATION_REQUEST":
      return { loading: true };

    case "USER_NOTIFICATION_SUCCESS":
      return { loading: false, userNoti: action.payload };

    case "ADD_NOTIFICATION":
      return {
        ...state,
        userNoti: Array.isArray(state.userNoti)
          ? [...state.userNoti, action.payload]
          : [action.payload],
      };
      
    case "USER_NOTIFICATION_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
