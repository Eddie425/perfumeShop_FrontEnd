import API from "../axiosAPI";
import {
  signUpMmeberDetailsSuccess,
  fetchMmeberDetailsSuccess,
  apiPending,
  apiError,
} from "../actions";

class MemberService {
  signUpMmeberDetails(member) {
    return (dispatch) => {
      dispatch(apiPending());
      API.post("member/", member).then(
        (response) => {
          dispatch(signUpMmeberDetailsSuccess(response.data));
          return response.data;
        },
        (error) => {
          dispatch(apiError(error));
        }
      );
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
