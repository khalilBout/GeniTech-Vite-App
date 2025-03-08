import React from "react";
import { useTranslation } from "react-i18next";
import mobile from "../../assets/iconLinks/mobil.png";
import desk from "../../assets/iconLinks/desk.png";
import web from "../../assets/iconLinks/web.png";
import design from "../../assets/iconLinks/dsng.png";
const LinkService = () => {
  const { t } = useTranslation();

  return (
    <div className=" my-2 flex justify-center items-center">
      <ul className=" w-[80%] flex flex-col mdl:flex-row justify-center items-center gap-2 mdl:gap-6 font-Title text-slate-950 font-bold">
        <li className="flex justify-center mdl:justify-between items-center min-w-[160px] px-3 py-1 rounded-md hover:scale-105 hover:bg-lime-300 hover:text-slate-100 transition-all duration-200">
          <img
            src={mobile}
            alt=""
            className=" hidden mdl:block w-auto h-[40px]"
          />
          <a
            href="/phoneapp"
            className="text-[13px] mdl:text-[16px] text-blue-950"
          >
            {t("linkService.mobileapp")}
          </a>
        </li>
        <li className="flex justify-center mdl:justify-between items-center min-w-[160px] px-3 py-1 rounded-md hover:scale-105 hover:bg-lime-300 hover:text-slate-100 transition-all duration-200">
          <img src={desk} alt="" className="hidden mdl:block w-auto h-[40px]" />
          <a
            href="/deskapp"
            className="text-[13px] mdl:text-[16px] text-blue-950"
          >
            {t("linkService.deskapp")}
          </a>
        </li>
        <li className="flex justify-center mdl:justify-between items-center min-w-[160px] px-3 py-1 rounded-md hover:scale-105 hover:bg-lime-300 hover:text-slate-100 transition-all duration-200">
          <img src={web} alt="" className="hidden mdl:block w-auto h-[40px]" />
          <a
            href="/webapp"
            className="text-[13px] mdl:text-[16px] text-blue-950"
          >
            {t("linkService.webapp")}
          </a>
        </li>
        <li className="flex justify-center mdl:justify-between items-center min-w-[160px] px-3 py-1 rounded-md hover:scale-105 hover:bg-lime-300 hover:text-slate-100 transition-all duration-200">
          <img
            src={design}
            alt=""
            className="hidden mdl:block w-auto h-[40px]"
          />
          <a
            href="/design"
            className="text-[13px] mdl:text-[16px] text-blue-950"
          >
            {t("linkService.design")}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinkService;
