// import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MapChart from "../Ui/Map";

import loc from "../../assets/loc.png";
import cream1 from "../../assets/mapImg/m1.png";
import cream2 from "../../assets/mapImg/m2.png";
import cream3 from "../../assets/mapImg/m3.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const localData = [
  {
    loc: "Siège Principal - Alger",
    hrefLoc: "https://goo.gl/maps/abcd1234",
    addLoc: "Rue de l'Indépendance, Alger",
    phone: "+213 21 123 456",
    email: "algiers@frostella.com",
    logoImg: cream1,
  },
  {
    loc: "Agence Sétif",
    hrefLoc: "https://goo.gl/maps/efgh5678",
    addLoc: "Quartier du 8 Mai 1945, Sétif",
    phone: "+213 36 654 321",
    email: "setif@frostella.com",
    logoImg: cream2,
  },
  {
    loc: "Agence Oran",
    hrefLoc: "https://goo.gl/maps/ijkl9012",
    addLoc: "Rue Emir Abdelkader, Oran",
    phone: "+213 41 789 012",
    email: "oran@frostella.com",
    logoImg: cream3,
  },
];

const WhereToBuy = () => {
  const { t } = useTranslation();
  const direction = window.document.dir;

  return (
    <div dir="ltr" className=" relative flex justify-end items-end">
      {/* form section  */}
      <div className=" w-full z-50 absolute bottom-6 mdl:bottom-12 left-2 md:left-4 mdl:left-24">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-xl mdl:text-2xl font-bold font-titleAr px-3 py-4 max-w-[450px] text-center"
        >
          {t("whereToBuy.title")}
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
          className="flex flex-col justify-end items-start gap-4"
        >
          {/* location  */}

          {localData?.map((elm, ind) => (
            <div
              key={ind}
              className="max-sml:w-[90%] flex gap-2 px-2 rounded-lg bg-primary/60"
            >
              <motion.img
                animate={{
                  y: [0, -4, 0, -4, 0],
                  // scale: [1, 1.1, 1, 1.1, 1],
                  // rotateZ: [0, -2, 0, -2, 0],
                  // rotateX: [0, -10, 0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  // repeatDelay: 1.2,
                }}
                src={elm.logoImg}
                alt="map"
                className="w-auto h-20 object-cover object-center "
              />
              <div className=" p-2 text-white">
                <a
                  href="https://maps.app.goo.gl/kjw77kKa7PUZuays5"
                  target="_blank"
                  className="flex gap-2 items-center font-semibold hover:scale-105 duration-200"
                >
                  <IoLocationSharp size={16} />
                  <p className="text-[14px] sml:text-[16px]">{elm.addLoc}</p>
                </a>
                <a
                  href={elm.hrefLoc}
                  target="_blank"
                  className="flex gap-2 text-white items-center hover:scale-105 duration-200"
                >
                  <HiOutlineMail size={16} />
                  <p className="text-[14px] sml:text-[16px]">{elm.email}</p>
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="flex gap-2 text-white items-center hover:scale-105 duration-200"
                >
                  <FaWhatsapp size={16} />
                  <p className="text-[14px] sml:text-[16px]"> {elm.phone}</p>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* word map section  */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1,
        }}
        className="w-full h-[80vh] "
      >
        <MapChart />
      </motion.div>
    </div>
  );
};

export default WhereToBuy;
