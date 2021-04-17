import imageUrl from "../resource/product/images/perfume_black.png";
import imageUrl1 from "../resource/product/images/perfume_black1.jpg";
import imageUrl2 from "../resource/product/images/perfume_black2.jpg";
import imageUrl3 from "../resource/product/images/perfume_black3.jpg";
import imageUrl4 from "../resource/product/images/perfume_black4.jpeg";

const initialState = {
  web: {
    pageName: "home",
    checkOutStep: 0,
    alert: {
      open: false,
      vertical: "top",
      horizontal: "center",
      severity: "",
      message: "",
    },
    inputLogic: {
      required: {
        key: "required",
        errorText: "此欄位必填",
      },
      isName: {
        key: "isName",
        errorText: "最大長度為 10 字元",
        logic: (value) => {
          if (!value) return false;
          if (value.length > 10) return false;
          return true;
        },
      },
      isPhone: {
        key: "isPhone",
        errorText: "手機格式有誤",
        logic: (value) => {
          const reg = /^09[0-9]{8}$/;
          if (!reg.test(value)) return false;
          return true;
        },
      },
      isEmail: {
        key: "isEmail",
        errorText: "Email 格式有誤",
        logic: (value) => {
          const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (!value) return false;
          if (!reg.test(value.toLowerCase())) return false;
          return true;
        },
      },
      checkEmail: {
        key: "checkEmail",
        errorText: "Email不相符",
      },
      isPassword: {
        key: "isPassword",
        errorText: "密碼格式有誤，至少六個字元，包含大小寫，至少一個數字",
        logic: (value) => {
          const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
          if (!reg.test(value)) return false;
          return true;
        },
      },
      checkPassword: {
        key: "checkPassword",
        errorText: "密碼不相符",
      },
    },
  },
  member: {
    memberId: 0,
    // firstName: "",
    // lastName: "",
    name: "",
    // gender: "",
    // dateOfBirth: "",
    email: "",
    phone: "",
    postalCode: "",
    city: "",
    district: "",
    address: "",
    // memberImage: "",
    // registerTime: "",
    // roles: "",
    orders: [],
    token: null,
  },

  cart: [
    {
      orderDate: "",
      quantity: 0,
      amount: 0,
      paid: false,
      orderStatus: 0,
      product: {
        productId: 0,
        price: 0,
      },
    },
  ],

  product: {
    productId: 0,
    title: "CHANEL N5",
    src: [imageUrl, imageUrl1, imageUrl2, imageUrl3, imageUrl4],
    description:
      "N°5 超越世代，歷久彌新 香奈兒女士以創造未來的的香氛為目標，打造出N°5。",
    content:
      "N°5，女性魅力的極致精髓。散發經典傳奇的乙醛花束香氣。香精以頂級原材料製成，為香水最珍貴的表現形式。封存於極簡設計的獨特瓶身，採用Baudruchage 手工封瓶技術，並點綴如寶石切割般形態的瓶蓋。",
    price: 2950,
    // colors: ["blue", "black", "red"],
  },

  api: {
    pending: false,
    error: null,
  },
};

export default initialState;
