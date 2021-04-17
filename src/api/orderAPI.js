import { apiPending, apiError, placeOrderDetailsSuccess } from "./actions";
import API from "./axiosAPI";

export function placeOrderDetails(order) {
  return (dispatch) => {
    dispatch(apiPending());
    API.get("orders/", order).then(
      (response) => {
        console.log("orders/ response => ", response);
        dispatch(placeOrderDetailsSuccess(response.data[0]));
        return response.data;
      },
      (error) => {
        dispatch(apiError(error));
      }
    );
  };
}
