import React from "react";
import wapp from "../../assets/wapp.png";
const WhatsAppBtn = () => {
  return (
    <div className=" fixed bottom-12 right-8">
      <a href="/" className="">
        <img src={wapp} alt="wapp" className="w-full h-auto" />
      </a>
    </div>
  );
};

export default WhatsAppBtn;
