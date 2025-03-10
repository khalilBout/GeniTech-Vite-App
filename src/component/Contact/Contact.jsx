import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import imgConatct from "../../assets/conatct/img.png";
import FormContact from "./FormContact";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="screenPadding my-12 mdl:flex justify-center items-center "
    >
      {/* image div  */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
        className=" hidden mdl:block mdl:w-1/2 h-full "
      >
        <img src={imgConatct} alt="" className="w-full h-auto" />
      </motion.div>
      {/* content div  */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
        className="w-full mdl:w-1/2 "
      >
        <h1 className="text-2xl text-primary font-Title">
          {t("contact.title")}
        </h1>
        <FormContact />
      </motion.div>
    </section>
  );
};
export default Contact;
