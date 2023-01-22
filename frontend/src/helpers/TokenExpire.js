//  localStorage.removeItem("userInfo");
//   dispatch({ type: "USER_LOGOUT" });
import store from "../store";

function TokenExpire() {
    localStorage.clear();
     window.location.href = "/";
}

export default TokenExpire