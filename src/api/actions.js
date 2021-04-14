export const API_PENDING = "API_PENDING";
export const API_ERROR = "API_ERROR";

export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS";
export const FETCH_MEMBER_DETAILS_SUCCESS = "FETCH_MEMBER_DETAILS_SUCCESS";

export const PLACE_ORDER_DETAILS_SUCCESS = "PLACE_ORDER_DETAILS_SUCCESS";

export function apiPending() {
  return {
    type: API_PENDING,
  };
}
export function apiError(error) {
  return {
    type: API_ERROR,
    error: error,
  };
}

export function authLoginSuccess(token) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    token: token,
  };
}
export function authLogoutSuccess() {
  return {
    type: AUTH_LOGOUT_SUCCESS,
  };
}
export function fetchMmeberDetailsSuccess(member) {
  return {
    type: FETCH_MEMBER_DETAILS_SUCCESS,
    member: member,
  };
}
export function signUpMmeberDetailsSuccess(member) {
  return {
    type: FETCH_MEMBER_DETAILS_SUCCESS,
    member: member,
  };
}

export function placeOrderDetailsSuccess(orderId) {
  return {
    type: PLACE_ORDER_DETAILS_SUCCESS,
    orderId: orderId,
  };
}
