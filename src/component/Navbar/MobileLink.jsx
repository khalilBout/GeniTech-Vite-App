import React from "react";

const MobileLink = ({ items }) => {
  return (
    <div className="mdl:hidden bg-slate-200/40  flex justify-center items-center w-full h-[80vh] absolute top-20 left-0  ">
      <ul className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-2 ">
        {items.map((elm, ind) => (
          <li key={ind} className="">
            <a
              className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
              href={elm.link}
            >
              {elm.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileLink;
