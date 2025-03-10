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
  const leng = [
    {
      key: "ar",
      value: "العربية",
    },
    {
      key: "en",
      value: "English",
    },
  ];
  const [opneLeng, setOpneLeng] = useState(false);

  return (
    <div className="flex">
      <button className="text-[14px] font-Title font-bold hidden mdl:block">
        <span className=" px-3 py-1 h-[30px] bg-primary/30 hover:bg-primary/90 rounded-md ">
          {t("link.btn")}
        </span>
      </button>
      <button className="bg-primary/30 hover:bg-primary m-1 w-8 h-8 p-1 rounded-full flex justify-center items-center  mdl:hidden">
        <FaWhatsapp size={20} />
      </button>
      <div className=" relative">
        <button
          className=" bg-primary/30 hover:bg-primary rounded-full m-1 mdl:m-2 w-8 h-8 p-1 flex justify-center items-center"
          onClick={() => setOpneLeng(!opneLeng)}
        >
          <IoLanguageSharp size={17} />
        </button>

        {opneLeng && (
          <ul className=" m-1 font-Title font-bold absolute -bottom-20 z-20 -left-4 px-2 bg-green-100 flex flex-col">
            {leng.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    i18n.changeLanguage(item.key);
                    changeDir();
                    setOpneLeng(false);
                  }}
                  className="inline-block w-[70px] p-1 hover:text-primary"
                >
                  {item.value}
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
