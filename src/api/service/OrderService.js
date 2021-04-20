import API from "../axiosAPI";
import { apiPending, apiError } from "../actions";

class OrderService {
  placeOrderDetails(order) {
    return async (dispatch) => {
      dispatch(apiPending());
      try {
        var response = await API.post("orders", JSON.stringify(order));
        if (response.data.success) {
          
          window.open( 'https://63official.backme.tw/checkout/1608/12311?locale=zh-TW&q='+response.data.data.ono, function (err) {

          });
          // console.log(response.data)
          // console.log(response.data..id)
          console.log(response.data.data.ono)
          // console.log(response.data['ono'])
          return "訂單成立！";
        } else {
          throw new Error("產生訂單失敗");
        }
      } catch (error) {
        console.log("error =>", error);
        dispatch(apiError(error));
        return "產生訂單失敗";
      }
    };
  }

  fetchOrderDetails() {
    return async (dispatch) => {
      dispatch(apiPending());
      try {
        const response = await API.get("orders");
        if (response.data.success) {
          return response.data.data;
        } else {
          throw new Error("取得訂單失敗");
        }
      } catch (error) {
        console.log("error =>", error);
        dispatch(apiError(error));
        return "取得訂單失敗";
      }
    };
  }
}

export default new OrderService();
