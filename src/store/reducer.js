import initialState from "./initialState";
import {
  API_PENDING,
  FETCH_MEMBER_DETAILS_SUCCESS,
  API_ERROR,
} from "../api/actions";

const CHANGE_PAGE = "CHANGE_PAGE";
const ALERT_CONTROL = "ALERT_CONTROL";

const CHECKOUT_CHANGE_STEP = "CHECKOUT_CHANGE_STEP";

const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS";
const FILL_MEMBER_DETAIL = "FILL_MEMBER_DETAIL";

const STORE_ORDER_PRODUCT = "STORE_ORDER_PRODUCT";
const PLACE_ORDER = "PLACE_ORDER";
const PLACE_ORDER_DETAILS_SUCCESS = "PLACE_ORDER_DETAILS_SUCCESS";

const REMOVE_MEMBER_DETAILS = "REMOVE_MEMBER_DETAILS";

const reducer = (state = initialState, action) => {
  console.log("state => ", state);
  console.log("action => ", action);
  switch (action.type) {
    //Web
    case CHANGE_PAGE:
      return {
        ...state,
        web: {
          ...state.web,
          pageName: action.pageName,
          checkOutStep: 0,
        },
      };
    case CHECKOUT_CHANGE_STEP:
      return {
        ...state,
        web: {
          ...state.web,
          checkOutStep: action.activeStep,
        },
      };
    case ALERT_CONTROL:
      Object.assign(state.web.alert, action.alert);
      return {
        ...state,
        web: {
          ...state.web,
          alert: {
            ...action.alert,
          },
        },
      };

    case AUTH_LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(action.token));
      return {
        ...state,
        token: action.token,
      };
    case AUTH_LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };

    case FILL_MEMBER_DETAIL:
      Object.assign(state.member, action.member);
      return {
        ...state,
        member: {
          ...action.member,
        },
      };

    case PLACE_ORDER:
      return {
        ...state,
        orders: action.orders,
      };
    case PLACE_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
      };
    case STORE_ORDER_PRODUCT:
      return {
        ...state,
        cart: [
          // ...state.cart,
          {
            quantity: action.quantity,
            productId: action.productId,
          },
        ],
      };

    //API
    case API_PENDING:
      return {
        ...state,
        api: {
          ...state.api,
          pending: true,
        },
      };

    case API_ERROR:
      return {
        ...state,
        api: {
          ...state.api,
          pending: false,
          error: action.error,
        },
      };

    case FETCH_MEMBER_DETAILS_SUCCESS:
      delete action.member.password;
      Object.assign(state.member, action.member);
      localStorage.setItem("token", JSON.stringify(action.member.stoken));
      return {
        ...state,
        pending: false,
      };

    case REMOVE_MEMBER_DETAILS:
      const initMember = {
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        postalCode: "",
        city: "",
        district: "",
        address: "",
        memberImage: "",
        registerTime: "",
        roles: "",
        orders: [],
      };
      Object.assign(state.member, initMember);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const getMemberDetails = (state) => state.member;
export const getMemberDetailsPending = (state) => state.pending;
export const getMemberDetailsError = (state) => state.error;

export const getOrderDetails = (state) => state.orders;
export const getOrderError = (state) => state.error;

export default reducer;
