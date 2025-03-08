import React, { useState } from "react";
import LinkService from "./LinkService";

const MobileLink = ({ items }) => {
  const [openLinkService, setOpenLinkService] = useState(false);

  return (
    <div className="mdl:hidden bg-slate-200/90  flex justify-center items-center w-full h-[80vh] absolute top-20 left-0  ">
      <ul className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-2 ">
        {/* {items.map((elm, ind) => (
          <li key={ind} className="">
            <a
              className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
              href={elm.link}
            >
              {elm.name}
            </a>
          </li>
        ))} */}

        <li className="">
          <a
            className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
            href={items[0].link}
          >
            {items[0].name}
          </a>
        </li>

        <li className="">
          <a
            className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
            href={items[1].link}
          >
            {items[1].name}
          </a>
        </li>

        <li className=" flex flex-col justify-center items-center">
          <button
            onClick={() => setOpenLinkService(!openLinkService)}
            className=" relative font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
          >
            {items[2].name}
          </button>
          {openLinkService && (
            <div className="">
              <LinkService />
            </div>
          )}
        </li>

        <li className="">
          <a
            className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
            href={items[3].link}
          >
            {items[3].name}
          </a>
        </li>
        <li className="">
          <a
            className="font-bold font-Title px-2 py-1 rounded-md hover:bg-primary hover:text-white"
            href={items[4].link}
          >
            {items[4].name}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileLink;
