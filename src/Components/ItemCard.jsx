import React from "react";
import dfghj from "./dfghj.jpg";
import { useState } from "react";
import { Button } from 'reactstrap';
import { Routes, Route, Link } from "react-router-dom";
function ItemCard() {
  const Item = {
    Id: "1",
    Name: "Tulip",
    img: "",
    price: "10SR",
  };
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1 <0? 0 : count - 1);


  };

  return (
    <div className="item">
      <img src={dfghj} className="photo" />
      {Item.Name}
      <br></br>
      price : {Item.price}
      <div className="btn__container">
      
        <button className="control__btn" onClick={increase}>
          +
        </button>
     
        <a className="counter__output">{counter}</a>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
      </div>
      <button className="buy">add to Cart</button>
    </div>
  );
}

export default ItemCard;
