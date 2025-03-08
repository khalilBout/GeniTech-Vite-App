import React from "react";
import { useTranslation } from "react-i18next";
import msgConatct from "../../assets/conatct/msg.png";
import FormContact from "./FormContact";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="screenPadding my-12 mdl:flex justify-center items-center relative ">
      {/* content div  */}
      <div className="w-full mdl:w-1/2 ">
        <h1 className="text-2xl text-primary font-Title">
          {t("contact.title")}
        </h1>
        <FormContact />
      </div>
      <div className="block lg:hidden absolute top-0 left-0 opacity-10 w-[100%] md:w-[80%] ">
        <img src={msgConatct} alt="" className="w-full h-auto" />
      </div>
      {/* image div  */}
      <div className="hidden lg:w-1/2 h-full lg:flex justify-around items-center mx-4">
        <p className="w-1/2 mx-8 pb-20 text-center text-[15px] font-Title text-slate-200">
          {t("contact-2.desc")}
        </p>
        <div className="w-1/2 pt-20">
          <img src={msgConatct} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
