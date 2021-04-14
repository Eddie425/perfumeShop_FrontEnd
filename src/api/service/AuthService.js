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
          "auth/login",
          JSON.stringify({
            username: email,
            password: password,
          })
        );
        dispatch(authLoginSuccess(response.data.token));
        console.log("response ==> ", response);
        return response.data;
      } catch (error) {
        console.log("error =>", error);
        dispatch(apiError(error));
        return error;
      }
    };
  }

  logout() {
    return (dispatch) => {
      dispatch(authLogoutSuccess());
      console.log("=== logout ===");
    };
  }
}

export default new AuthService();
