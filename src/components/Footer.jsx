import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-slate-900 flex flex-col justify-between items-center text-white gap-2 capitalize">
      <div className="title text-xl pt-4">These are our Companies{""}</div>
      <div className="list flex justify-between w-full px-[100px] text-lg gap-3">
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
      <div className="icon gap-8 flex ">
        <FaFacebook />
        <FaTwitter />
        <FaWhatsappSquare />
        <FaInstagramSquare />
        <FaGoogle />
      </div>
      <div className="pb-2">
      © copyright 1986. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
