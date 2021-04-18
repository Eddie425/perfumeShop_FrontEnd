import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Selection from "./Selection.js";
import DetailsThumb from "./DetailsThumb.js";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./ProductDetail.css";

export default function ProductDetail() {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();

  const myRef = React.useRef();

  const product = useSelector((state) => state.product);
  const member = useSelector((state) => state.member);

  const dispatch = useDispatch();

  const setSelectQuantity = (quantity) => {
    setQuantity(quantity);
  };

  const handleCheckOutClick = () => {
    dispatch({
      type: "STORE_ORDER_PRODUCT",
      quantity: quantity,
      memberId: member.memberId,
      productId: product.productId,
    });
    history.push("/checkout");
  };

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  useEffect(() => {
    myRef.current.children[index].className = "active";
  });

  return (
    <div>
      <div className="details" key={product.productId}>
        <div className="big-img">
          <img src={product.src[index]} alt="" />
        </div>
        <div className="box">
          <div className="row">
            <h2>{product.title}</h2>
            <span>$ {product.price}</span>
          </div>
          <Typography variant="body2" color="inherit">
            做為你在63OFFICIAL第一個旅程紀念品，我選擇了香水做為禮物給你。
          </Typography>
          <div className="detailsText">
            <Typography variant="subtitle2" color="inherit" align="left">
              前調：甜梨 與 蜂蜜 的乾淨清甜香氣
            </Typography>
            <Typography variant="subtitle2" color="inherit" align="left">
              中調：薰衣草 / 天竺葵與鼠尾草 完美揉合質感東方香調
            </Typography>
            <Typography variant="subtitle2" color="inherit" align="left">
              後調：雪松 / 乾燥木 恍如置身森林小木屋的木質基調
            </Typography>
          </div>
          <DetailsThumb images={product.src} tab={handleTab} myRef={myRef} />
          <Selection
            quantity={quantity}
            setSelectQuantity={setSelectQuantity}
          />
          <button id="checkout" onClick={handleCheckOutClick} className="cart">
            結帳
          </button>
        </div>
      </div>
    </div>
  );
}
