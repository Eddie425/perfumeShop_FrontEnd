import API from "../axiosAPI";
import {
  authLoginSuccess,
  authLogoutSuccess,
  apiPending,
  apiError,
} from "../actions";

class AuthService {
  authLogin(email, password) {
    return async (dispatch) => {
      dispatch(apiPending());
      try {
        const response = await API.post(
          "login",
          JSON.stringify({
            email: email,
            pwd: password,
          })
        );
        if (response.data.status && response.data.stoken) {
          dispatch(authLoginSuccess(response.data.stoken));
          return response.data;
        } else {
          throw new Error("登入失敗 ! ");
        }
      } catch (error) {
        console.log("error =>", error);
        dispatch(apiError(error));
        return error;
      }
    };
  }

  checklogStatus() {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    return (dispatch) => {
      dispatch(authLogoutSuccess());
    };
  }
}

export default new AuthService();
