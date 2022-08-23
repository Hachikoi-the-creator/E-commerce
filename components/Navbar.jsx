import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Card from "./Cart";

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  // console.log(showCart);

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Hachi Sound</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Card />}
    </div>
  );
}
