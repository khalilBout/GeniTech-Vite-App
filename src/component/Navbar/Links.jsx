import React from "react";

const Links = ({ items }) => {
  return (
    <div className=" hidden mdl:block">
      <ul className="flex justify-center items-center gap-4 font-Title font-bold">
        {items.map((elm, ind) => (
          <li key={ind} className="">
            <a href={elm.link}>{elm.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
