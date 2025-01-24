// import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import Cart from "../Ui/Cart";
// image
import BlackCoffee from "../../assets/HeroImg/ice.png";
import f1 from "../../assets/HeroImg/f1.png";
import f2 from "../../assets/HeroImg/f2.png";
// import f3 from "../../assets/HeroImg/f3.png";
import f4 from "../../assets/HeroImg/f4.png";

import ch1 from "../../assets/HeroImg/ch1.png";
import ch2 from "../../assets/HeroImg/ch2.png";
import ch3 from "../../assets/HeroImg/ch3.png";
import ch4 from "../../assets/HeroImg/ch4.png";

import cty1 from "../../assets/cty/cty1.png";
import cty2 from "../../assets/cty/cty2.png";
import cty3 from "../../assets/cty/cty3.png";
import cty4 from "../../assets/cty/cty4.png";

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

const dataProducts = [
  {
    name: "Glace à la vanille royale",
    nameAr: "يس كريم الفانيليا الملكية",
    dect: "Crémeuse, douce, et préparée avec la meilleure vanille naturelle.",
    dectAr: "تجربة فاخرة للنقاء الكريمي.",
    price: "250",
    img: cty1,
  },
  {
    name: "Pack Chocolat Noir",
    nameAr: "عبوة الشوكولاتة الداكنة",
    dect: "Intense et riche, réalisée avec le cacao belge le plus fin.",
    dectAr: "نكهة قوية لمحبي الشوكولاتة.",
    price: "270",
    img: cty2,
  },
  {
    name: "Pack Fraises Fraîches",
    nameAr: "عبوة الفراولة الطازجة",
    dect: "Rafraîchissante et pleine de saveur, avec des fraises locales.",
    dectAr: "منعشة ومثالية لمحبي الفواكه.",
    price: "190",
    img: cty3,
  },
  {
    name: "Pack Mangue Tropicale",
    nameAr: "عبوة المانجو الغني",
    dect: "Une combinaison unique de crème soyeuse et de morceaux de biscuit croquants.",
    dectAr: "مذاق استوائي مثالي لأيام الصيف.",
    price: "220",
    img: cty4,
  },
];
const Hero = () => {
  const { t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);

  const direction = window.document.dir;

  return (
    <main
      //  style={bgImage}
      className=""
    >
      <section className="min-h-[600px] w-full relative">
        <div className="">
          {/* Navbar sect  */}
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

          {/* <p>{t("navbar.logo")}</p> */}
          {/* Hero sect  */}
          <div className=" relative  overflow-hidden flex justify-center">
            {/* Hero Image section   */}
            <div className="relative max-w-[520px]">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt="main Image"
                className="relative z-30 h-[500px] mt-4 md:h-[700px] img-shadow "
              />

              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{
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
                animate={{
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
                animate={{
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
                animate={{
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
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[80px] sml:h-[100px] md:h-[120px] mdl:h-[140px] xl:h-[160px] w-auto absolute bottom-40 -right-4 sml:-right-12 mdl:-right-24  z-10 "
                src={f2}
                alt="Image"
              />
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                animate={{
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
                animate={{
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
                animate={{
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
              <div
                className={
                  direction === "rtl"
                    ? "absolute -top-10 right-[200px] z-[1] text-primaryDark/30"
                    : "absolute -top-10 left-[200px] z-[1] text-primaryDark/30"
                }
              >
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="text-[140px] scale-150 font-bold leading-none text-end"
                >
                  {" "}
                  {t("hero.title")}{" "}
                </motion.h1>
              </div>
            </div>
            <div className=" hidden mx-8 mb-16 absolute z-40 bottom-4 left-2 xl:flex flex-col gap-4">
              <Cart data={dataProducts[0]} />
              <Cart data={dataProducts[1]} />
            </div>
            <div className="hidden mx-8 mb-16 absolute z-40 bottom-4 right-2 xl:flex flex-col gap-4 ">
              <Cart data={dataProducts[2]} />
              <Cart data={dataProducts[3]} />
            </div>
          </div>
          <div className="mx-auto w-[90%] pb-4 flex justify-center items-center flex-col lg:flex-row xl:hidden gap-4">
            <div className="flex flex-col xl:flex-row gap-4">
              <Cart data={dataProducts[0]} />
              <Cart data={dataProducts[1]} />
            </div>
            <div className="flex flex-col xl:flex-row gap-4">
              <Cart data={dataProducts[2]} />
              <Cart data={dataProducts[3]} />
            </div>
          </div>
        </div>

        {/* sidebar menu  */}

        {showSidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className={
              direction === "rtl"
                ? "absolute top-0 left-0 w-[180px] h-[100vh] bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-40"
                : "absolute top-0 right-0 w-[180px] h-[100vh] bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-40"
            }
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white "></div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                  {" "}
                  <FaFacebookF className="text-2xl" />{" "}
                </div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                  {" "}
                  <FaXTwitter className="text-2xl" />{" "}
                </div>
                <div className=" inline-block p-2 rounded-full cursor-pointer border border-white">
                  {" "}
                  <FaInstagram className="text-2xl" />{" "}
                </div>
                <div className="w-[1px] h-[70px] bg-white "></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
