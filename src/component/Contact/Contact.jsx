import React from "react";
import { useTranslation } from "react-i18next";
import imgConatct from "../../assets/conatct/img.png";
import FormContact from "./FormContact";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="screenPadding my-12 mdl:flex justify-center items-center ">
      {/* image div  */}
      <div className=" hidden mdl:block mdl:w-1/2 h-full ">
        <img src={imgConatct} alt="" className="w-full h-auto" />
      </div>
      {/* content div  */}
      <div className="w-full mdl:w-1/2 ">
        <h1 className="text-2xl text-primary font-Title">
          {t("contact.title")}
        </h1>
        <FormContact />
      </div>
    </div>
  );
};
export default Contact;
