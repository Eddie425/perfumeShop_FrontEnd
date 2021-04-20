import imageUrl from "../resource/product/images/perfume_cover.jpg";
import imageUrl1 from "../resource/product/images/p_1.jpg";
import imageUrl2 from "../resource/product/images/p_2.jpg";
import imageUrl3 from "../resource/product/images/p_3.jpg";
import imageUrl4 from "../resource/product/images/p_4.jpg";
import imageUrl5 from "../resource/product/images/p_5.jpg";
import imageUrl6 from "../resource/product/images/p_6.jpg";
import imageUrl7 from "../resource/product/images/p_7.jpg";
import imageUrl8 from "../resource/product/images/p_8.jpg";

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
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    city: "",
    district: "",
    address: "",
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
    title: "63OFFICIAL 首款香水",
    src: [imageUrl,imageUrl4, imageUrl3, imageUrl2, imageUrl1,imageUrl6],
    description:
      "做為你在63OFFICIAL第一個旅程紀念品，我選擇了香水做為禮物給你。",
    content:
      "\
      味道\
      前調：甜梨 與 蜂蜜 的乾淨清甜香氣\
      中調：薰衣草 / 天竺葵與鼠尾草 完美揉合質感東方香調\
      後調：雪松 / 乾燥木 恍如置身森林小木屋的木質基調",
    price: 2100,
  },

  api: {
    pending: false,
    error: null,
  },
};

export default initialState;
