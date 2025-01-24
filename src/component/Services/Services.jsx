import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import t1 from "../../assets/onTable/t1.png";
import t2 from "../../assets/onTable/t2.png";
import t3 from "../../assets/onTable/t3.png";
import t4 from "../../assets/onTable/t4.png";

import d1 from "../../assets/delivery/d1.png";
import d2 from "../../assets/delivery/d2.png";
import d3 from "../../assets/delivery/d3.png";
import d4 from "../../assets/delivery/d4.png";

import snaw from "../../assets/Snow.svg";
import { TbMath1Divide3 } from "react-icons/tb";
import CartCty from "../Ui/CartCty";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { t } = useTranslation();
  const direction = window.document.dir;

  const svgRef = useRef(null);

  const serverData = [
    {
      id: 1,
      image: t1,
      title: "Glace à la vanille royale",
      titleAr: "آيس كريم الفانيليا الملكية",
      subtitle:
        "Crémeuse, douce, et préparée avec la meilleure vanille naturelle.",
      subtitleAr: "كريمي، ناعم، ومصنوع من أجود أنواع الفانيليا الطبيعية.",
      price: "100",
    },
    {
      id: 2,
      image: t2,
      title: "Glace au chocolat noir",
      titleAr: "آيس كريم الشوكولاتة الداكنة",
      subtitle: "Intense et riche, réalisée avec le cacao belge le plus fin",
      subtitleAr: "غامق، غني بالنكهة، مصنوع من أفخر أنواع الكاكاو البلجيكي.",
      price: "90",
    },
    {
      id: 3,
      image: t3,
      title: "Glace aux fraises fraîches",
      titleAr: "آيس كريم الفراولة الطازجة",
      subtitle: "Rafraîchissante et pleine de saveur, avec des fraises locales",
      subtitleAr:
        "منعش ومليء بنكهة الفواكه الطبيعية، مباشرة من مزارعنا المحلية.",
      price: "80",
    },
    {
      id: 4,
      image: t4,
      title: "Glace biscuit & crème",
      titleAr: "آيس كريم البسكويت والكريمة",
      subtitle:
        "Une combinaison unique de crème soyeuse et de morceaux de biscuit croquants",
      subtitleAr:
        "تجربة فريدة تجمع بين الكريمة الناعمة وقطع البسكويت المقرمشة.",
      price: "120",
    },
  ];

  const serverDataDelivry = [
    {
      id: 1,
      image: d1,
      title: "Pack Vanille Royale",
      titleAr: "علبة فانيليا رويال",
      subtitle:
        "Une crème somptueuse à la vanille naturelle, offrant une texture lisse et un arôme envoûtant.",
      subtitleAr:
        "كريمة فاخرة بنكهة الفانيليا الطبيعية، توفر ملمسًا ناعمًا ورائحة آسرة.",

      price: "120",
    },
    {
      id: 2,
      image: d2,
      title: "Pack Chocolat Noir",
      titleAr: "علبة شوكولاتة داكنة",
      subtitle:
        "Un mélange intense et raffiné de chocolat noir pour une expérience riche et gourmande.",
      subtitleAr: "مزيج غني ومكثف من الشوكولاتة الداكنة لتجربة لذيذة وغنية.",
      price: "160",
    },
    {
      id: 3,
      image: d3,
      title: "Pack Fraises Fraîches",
      titleAr: "علبة فراولة طازجة",
      subtitle:
        "Une explosion de fraîcheur fruitée, idéale pour les amateurs de saveurs authentiques.",
      subtitleAr:
        "انفجار من النكهة الفاكهية الطازجة، مثالية لعشاق الطعم الأصيل.",
      price: "180",
    },
    {
      id: 4,
      image: d4,
      title: "Pack Mangue Tropicale",
      titleAr: "علبة مانجو استوائية",
      subtitle:
        "Une escapade exotique avec le goût vibrant de mangues tropicales mûries au soleil.",
      subtitleAr: "رحلة استوائية مع نكهة المانجو الناضجة تحت أشعة الشمس.",
      price: "220",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },

    visible: {
      opacity: 1,
      y: 0,
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
        delay: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  const pathRef = useRef(null);

  useEffect(() => {
    const pathLength = pathRef.current.getTotalLength(); // Get total length of the SVG path

    gsap.set(pathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength, // Hide the path initially
    });

    gsap.to(pathRef.current, {
      strokeDashoffset: 0, // Animate to draw the path
      scrollTrigger: {
        trigger: pathRef.current, // Trigger the animation based on scrolling
        start: "top 10%", // Adjust the start point based on the viewport
        end: "bottom 50%", // Adjust the end point for smooth animation
        scrub: true, // Smooth sync with scrolling
        // markers: true, // Debug markers (remove in production)
      },
      duration: 2, // Can be fine-tuned with scrub option
      ease: "none", // Linear drawing effect
    });
  }, []);
  return (
    <div className="relative">
      {/* <img
        src={snaw}
        alt="bg"
        className=" object-cover object-center w-full h-full absolute top-0 left-0 right-0"
      /> */}
      <div className=" absolute -z-10 -top-28 left-0 right-0 w-[100%] h-auto flex justify-center items-center">
        <svg
          width="1512"
          height="2652"
          viewBox="0 0 1512 2652"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M1512 0C1512 0 82.3044 293.336 64.559 480.189C28.3015 861.97 1283.55 278.027 1366.9 652.757C1455.46 1050.89 -34.1913 868.85 -9.7593 1275.5C13.8734 1668.85 1462.36 930.372 1452.38 1324.27C1442.97 1695.97 -63.6758 1627.17 -26.2044 1997.19C9.36465 2348.43 1407.37 1744.18 1398.25 2097.01C1389.22 2446.57 50.4031 2536 -77 2536"
            stroke="url(#paint0_linear_462_8)"
            stroke-opacity="0.8"
            stroke-width="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_462_8"
              x1="717.5"
              y1="0"
              x2="717.5"
              y2="2536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F7081D" stop-opacity="0.59" />
              <stop offset="1" stop-color="#F21386" stop-opacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* ref={pathRef} */}
      </div>
      <div className=" container py-16  ">
        {/* heder section  */}
        <div className=" container text-center max-w-lg mx-auto space-y-2 ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-xl mdl:text-2xl xl:text-3xl font-titleAr font-bold text-lightGray"
          >
            {t("services.servis-1.titleGray")}
            <span className=" px-2 text-primary">
              {t("services.servis-1.titleOrng")}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="text-sm opacity-50 font-bodyAr"
          >
            {t("services.servis-1.desc")}
          </motion.p>
        </div>
        {/* cart section  */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.1 }}
          className=" m-4 container flex justify-around items-center flex-wrap gap-8"
        >
          {serverData.map((item) => (
            <motion.div
              variants={cardVariants}
              key={item.id}
              className=" w-[200px] h-[240px] rounded-lg shadow-2xl hover:bg-gray-200/70"
            >
              <CartCty item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container py-16 bg-slate-50/40 ">
        {/* heder section  */}
        <div className=" container text-center max-w-lg mx-auto space-y-2 ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className=" font-titleAr text-3xl font-bold text-lightGray"
          >
            {t("services.servis-2.titleGray")}
            <span className=" px-2 text-primary">
              {t("services.servis-2.titleOrng")}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="text-sm opacity-50 font-bodyAr"
          >
            {t("services.servis-2.desc")}
          </motion.p>
        </div>
        {/* cart section  */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ amount: 0.1 }}
          className="container my-4 flex justify-around items-center flex-wrap gap-8"
        >
          {serverDataDelivry.map((item) => (
            <motion.div
              variants={cardVariants}
              key={item.id}
              className=" w-[200px] h-[240px] rounded-lg shadow-2xl hover:bg-gray-200/70"
            >
              <CartCty item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
