import React from "react";

const CartComment = ({ item }) => {
  return (
    <div
      dir="ltr"
      className=" border border-primary rounded-md w-[250px] md:max-w-[290px] font-Title m-2 p-3"
    >
      {/* info  */}
      <div className="flex justify-start items-center gap-4">
        <img
          src={item.img}
          alt=""
          className="w-[40px] md:w-[65px] h-[40px] md:h-[65px]"
        />
        <h3 className="font-Title font-bold text-[15px] md:text-xl text-primary">
          {" "}
          {item.user}{" "}
        </h3>
      </div>
      <div>
        <p className="text-slate-200 text-center text-[13px] md:text-[15px]">
          {" "}
          {item.content}{" "}
        </p>
      </div>
    </div>
  );
};

export default CartComment;
