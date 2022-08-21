import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-container">
      <p>Hachi Sound. All Righst Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}
