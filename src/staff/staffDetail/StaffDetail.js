import React, { useState, useEffect } from "react";
import Selection from "./Selection.js"
import DetailsThumb from "./DetailsThumb.js"
import imageUrl from "../../resource/product/images/perfume_black.png";
import imageUrl1 from "../../resource/product/images/perfume_black1.jpg";
import imageUrl2 from "../../resource/product/images/perfume_black2.jpg";
import imageUrl3 from "../../resource/product/images/perfume_black3.jpg";
import imageUrl4 from "../../resource/product/images/perfume_black4.jpeg";
import "./staffDetail.css";

export default function StaffDetail(props) {
  const [product, setProduct] = useState([
    {
      id: "001",
      title: "CHANEL N5",
      src: [imageUrl, imageUrl1, imageUrl2, imageUrl3, imageUrl4],
      description:
        "N°5 超越世代，歷久彌新 香奈兒女士以創造未來的的香氛為目標，打造出N°5。 結合花束馨香的前瞻性香氛創作，香氣中流淌著女性的 優雅姿態。 N°5成為未來的一部分",
      content:
        "N°5，女性魅力的極致精髓。散發經典傳奇的乙醛花束香氣。香精以頂級原材料製成，為香水最珍貴的表現形式。封存於極簡設計的獨特瓶身，採用Baudruchage 手工封瓶技術，並點綴如寶石切割般形態的瓶蓋。",
      price: "2,950",
      colors: ["blue", "black", "red"],
      count: "",
    },
  ]);
  const [index, setIndex] = useState(0);

  // const getProductDetail = () => {
  //   fetch("https://perfumeshop.herokuapp.com/api/product_" + id)
  //     .then((response) => response.text())
  //     .then((message) => {
  //       this.setState({ message: message });
  //     });
  // };

  const myRef = React.useRef();

  const products = product;

  const handleCheckOutClick = (event) => {
    props.setPage(event.currentTarget.id);
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
      {products.map((item) => (
        <div className="details" key={item.id}>
          <div className="big-img">
            <img src={item.src[index]} alt="" />
          </div>
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>$ {item.price}</span>
            </div>
            {/* <Colors colors={item.colors} /> */}
            <p>{item.description}</p>
            <p>{item.content}</p>
            <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} />
            <Selection />
            <button
              id="checkout"
              onClick={handleCheckOutClick}
              className="cart"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
