import React from "react";
import { useTranslation } from "react-i18next";
import CardProfil from "./CardProfil";
import img1 from "../../assets/product/p1.png";
import Slider from "react-slick";
import ImageSlider from "../Ui/SlidAuto";

const dataProfil = [
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
  {
    title: "نظام إدارة المحتوى المتكامل",
    desc: "تحكم كامل في موقعك الإلكتروني بسهولة وأمان مع نظام مرن يتيح لك إدارة المحتوى، المقالات، المنتجات، والصفحات بواجهة بسيطة وسريعة.",
    titleEn: "Integrated Content Management System",
    descEn:
      "Take full control of your website easily and securely with a flexible system that allows you to manage content, articles, products, and pages through a simple and fast interface.",
    image: img1,
  },
];
const Profil = () => {
  const { t } = useTranslation();

  var settings = {
    dots: false,
    // infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // arrow: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          // arrow: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // arrow: true,
        },
      },
    ],
  };
  return (
    <div className="screenPadding my-12">
      <h1 className=" py-2 mdl:py-4 text-xl mdl:text-2xl xl:text-3xl font-Title font-bold text-slate-200">
        {t("profil.title")}-
        <span className="text-primary">{t("profil.span")}</span>
      </h1>
      <h1 className="pb-2 text-xl mdl:text-2xl xl:text-3xl font-Title font-medium text-slate-200">
        {t("profil.title2")}
      </h1>
      <div className="w-full flex justify-between items-center gap-4 ">
        <div className=" w-[60%] sml:w-[80%] lg:w-[70%] mx-auto my-4 ">
          <Slider {...settings}>
            {dataProfil.map((item, ind) => (
              <CardProfil key={ind} item={item} />
            ))}
          </Slider>
        </div>
        {/* image div  */}
        <div className=" hidden lg:flex justify-center items-center lg:w-[30%] h-full">
          {/* <img className="w-[100%] h-auto" src={imgProfil} alt="imgProfil" /> */}
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Profil;
