// import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import g1 from "../../assets/order/g1.png";
import g2 from "../../assets/order/g2.png";
import g3 from "../../assets/order/g3.png";

import t1 from "../../assets/order/t1.png";

import p1 from "../../assets/order/p1.png";
import p4 from "../../assets/order/p4.png";

import f1 from "../../assets/HeroImg/f1.png";
import f2 from "../../assets/HeroImg/f2.png";
import f3 from "../../assets/HeroImg/f3.png";
import f4 from "../../assets/HeroImg/f4.png";

import ch1 from "../../assets/HeroImg/ch1.png";
import ch2 from "../../assets/HeroImg/ch2.png";
import ch3 from "../../assets/HeroImg/ch3.png";

const Order = () => {
  const { t } = useTranslation();
  const direction = window.document.dir;

  return (
    <div className=" py-36">
      <div className="flex flex-col mdl:flex-row gap-8 justify-center items-center">
        {/* form section  */}
        <div className=" container mx-8 mdl:mx-16 w-full h-full mdl:w-1/2 xl:w-1/3">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-bold text-darkGray font-titleAr text-justify"
          >
            {t("order.title")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="flex items-center gap-8 my-4"
          >
            <input
              type="text"
              placeholder={direction === "rtl" ? "الإسم" : "Name"}
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder={direction === "rtl" ? "الهاتف" : "Téléphone"}
              className="input-style w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder={direction === "rtl" ? "المدينة" : "City"}
              className="input-style w-full "
            />
            <input
              type="text"
              placeholder={direction === "rtl" ? "الحي" : "stryt"}
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="primary-btn w-full font-titleAr my-4"
          >
            {t("whereToBuy.btn")}
          </motion.button>
        </div>
        {/* word map section  */}
        <div className=" w-full mdl:w-1/2 xl:w-2/3 h-[100vh] relative max-w-[520px]">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.7,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            src={g1}
            alt="main Image"
            className="relative z-30 h-[400px] mt-4 md:h-[700px] img-shadow "
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            src={g2}
            alt="main Image"
            className=" absolute top-16  mdl:top-24 -left-16 md:-left-24 mdl:-left-36 z-40 h-[500px] mt-4 md:h-[700px] img-shadow "
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            src={g3}
            alt="main Image"
            className=" absolute top-8 mdl:top-24 left-20 md:left-28 mdl:left-36 z-40 h-[500px] mt-4 md:h-[700px] img-shadow "
          />

          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.4,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            src={t1}
            alt="main Image"
            className=" absolute -top-56 mdl:-top-36 left-20 md:left-40 mdl:left-60 z-40 h-[500px] mt-4 md:h-[700px] img-shadow "
          />

          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.2,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            src={p4}
            alt="main Image"
            className=" absolute -top-24 -left-60 z-50 h-[500px] mt-4 md:h-[700px] img-shadow "
          />

          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 0.2,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.7,
            }}
            src={p1}
            alt="main Image"
            className=" absolute top-60 left-0 z-50 h-[500px] mt-4 md:h-[700px] img-shadow "
          />

          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            src={ch1}
            alt="image"
            className="absolute bottom-0 h-[300px] sml:h-[400px] md:h-[500px] mdl:h-[700px] w-auto img-shadow "
          />

          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="h-[80px] sml:h-[100px] md:h-[120px] mdl:h-[140px] xl:h-[160px] w-auto absolute top-24 -right-4 sml:-right-12 mdl:-right-16  z-10 "
            src={f1}
            alt="Image"
          />
          <motion.img
            initial={{ opacity: 0, y: -200 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="h-[80px] sml:h-[100px] md:h-[120px] mdl:h-[140px] xl:h-[160px] w-auto absolute top-24 -left-4 sml:-left-12 mdl:-left-16  z-10 "
            src={f2}
            alt="Image"
          />

          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="h-[80px] sml:h-[100px] md:h-[120px] mdl:h-[140px] xl:h-[160px] w-auto absolute bottom-24 -left-4 sml:-left-12 mdl:-left-16  z-10 "
            src={f4}
            alt="Image"
          />

          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="h-[80px] sml:h-[100px] md:h-[120px] mdl:h-[140px] xl:h-[160px] w-auto absolute bottom-0 -right-4 sml:-right-12 mdl:-right-16  z-10 "
            src={f3}
            alt="Image"
          />
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="h-[40px] sml:h-[50px] md:h-[70px] mdl:h-[80px] xl:h-[90px] w-auto absolute bottom-60 -left-8 sml:-left-10 mdl:-left-12  z-10 "
            src={ch3}
            alt="Image"
          />
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="h-[16px] sml:h-[20px] md:h-[30px] mdl:h-[35px] xl:h-[40px] w-auto absolute bottom-6 left-14 sml:left-8 mdl:left-4  z-10 "
            src={ch2}
            alt="Image"
          />
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            // className=" h-[180px] w-[180px] absolute top-18 right-24  z-10 "
            className="h-[20px] sml:h-[30px] md:h-[40px] mdl:h-[50px] xl:h-[60px] w-auto absolute bottom-28 -right-12 sml: mdl:-right-20  z-10 "
            src={ch2}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
