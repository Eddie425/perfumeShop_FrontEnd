import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Selection from "./Selection.js";
import DetailsThumb from "./DetailsThumb.js";
import { useHistory } from "react-router-dom";
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
          {/* <Colors colors={item.colors} /> */}
          <p>{product.description}</p>
          <p>{product.content}</p>
          <DetailsThumb images={product.src} tab={handleTab} myRef={myRef} />
          <Selection
            quantity={quantity}
            setSelectQuantity={setSelectQuantity}
          />
          <button id="checkout" onClick={handleCheckOutClick} className="cart">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
