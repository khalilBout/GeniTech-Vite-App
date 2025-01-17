// import { data } from "autoprefixer";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const cart = ({ data }) => {
  const direction = window.document.dir;
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      scale: 1.8,
      y: 60,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ amount: 0.1 }}
      className=" relative group duration-500 transition-all max-w-[420px] h-[180px] text-white bg-primary/60 hover:bg-white hover:text-black flex space-x-2 rounded-md border border-gray-300"
    >
      <div className=" max-sml:absolute max-sml:-z-10 max-sml:right-0 max-sml:top-0 w-1/3 h-full flex justify-center items-center ">
        <motion.img
          variants={cardVariants}
          src={data.img}
          alt="image"
          className="w-full h-auto object-center object-fill group-hover:-rotate-12"
        />
        <div className=" hidden sml:block w-1 h-[85%] bg-gray-300 rounded-full"></div>
      </div>
      <div className="w-full sml:w-2/3 h-full p-6 flex flex-col gap-2">
        <h1 className="font-semibold text-xl">
          {direction === "rtl" ? data.nameAr : data.name}
        </h1>

        <h2 className="text-[14px]">
          {direction === "rtl" ? data.dectAr : data.dect}
        </h2>
        {/* <h2 className="text-[15px]"> Order Type: </h2>
        <div className="flex justify-between">
          <button className=" border border-gray-300 px-3 rounded-md">
            On Table{" "}
          </button>
          <button className=" border border-gray-300 px-3 rounded-md">
            Delivery{" "}
          </button>
        </div> */}
        <div className="w-auto border border-primary px-2 py-1">
          <h2 className="text-[15px]">
            {t("hero.prix")}
            <span className=" font-bold text-[18px] text-primary ">
              {" "}
              {data.price}
            </span>{" "}
            {t("hero.unit")}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default cart;
