import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { FaWhatsapp } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

const Icons = () => {
  const { t } = useTranslation();
  const changeDir = () => {
    window.document.dir = i18n.dir();
  };
  const leng = ["ar", "fr"];
  const [opneLeng, setOpneLeng] = useState(false);

  return (
    <div className="flex">
      <button className="px-2 py-1 bg-green-300 rounded-md font-Title font-bold hidden mdl:block">
        {" "}
        {t("link.btn")}
      </button>
      <button className=" flex justify-center items-center  mdl:hidden">
        <FaWhatsapp size={20} />
      </button>
      <div className=" relative">
        <button
          className="m-2 w-8 h-8 p-1 flex justify-center items-center"
          onClick={() => setOpneLeng(!opneLeng)}
        >
          <IoLanguageSharp />
        </button>

        {opneLeng && (
          <ul className=" absolute -bottom-8 z-20 -left-4 px-2 flex bg-blue-400/90">
            {leng.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    i18n.changeLanguage(item);
                    changeDir();
                  }}
                  className="inline-block w-[30px] rounded-full p-1 hover:bg-primary/40"
                >
                  {item.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Icons;
