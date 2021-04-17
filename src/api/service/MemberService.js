import API from "../axiosAPI";
import {
  signUpMmeberDetailsSuccess,
  fetchMmeberDetailsSuccess,
  apiPending,
  apiError,
} from "../actions";

class MemberService {
  signUpMmeberDetails(user) {
    return async (dispatch) => {
      dispatch(apiPending());
      try {
        const response = await API.post("users", JSON.stringify(user));
        if (response.data.success) {
          dispatch(signUpMmeberDetailsSuccess(response.data.data));
          return "註冊帳號成功！";
        } else {
          throw new Error("註冊帳號失敗");
        }
      } catch (error) {
        console.log("error =>", error);
        dispatch(apiError(error));
        return "註冊帳號失敗";
      }
    };
  }

  fetchMmeberDetails(memberId) {
    return async (dispatch) => {
      dispatch(apiPending());
      try {
        const response = await API.get("member/", { memberId: memberId });
        dispatch(fetchMmeberDetailsSuccess(response.data[0]));
      } catch (error) {
        dispatch(apiError(error));
      }
    };
  }
}

export default new MemberService();
