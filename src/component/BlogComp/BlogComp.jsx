import React from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";
import img1 from "../../assets/blog/b1.png";

const dataBlog = [
  {
    img: "",
    title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
    desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
    titleEn:
      "How to Choose a Website Design That Reflects Your Brand Identity?",
    descEn:
      "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
    image: img1,
  },
  {
    img: "",
    title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
    desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
    titleEn:
      "How to Choose a Website Design That Reflects Your Brand Identity?",
    descEn:
      "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
    image: img1,
  },
  {
    img: "",
    title: "كيف تختار تصميم موقع يعكس هوية علامتك التجارية؟",
    desc: "تصميم موقعك الإلكتروني هو أول انطباع يكوّنه العملاء عن علامتك التجارية، لذا يجب أن يكون احترافيًا ويعكس رؤيتك. في هذا المقال، سنساعدك على اختيار التصميم المثالي من خلال فهم عناصر الهوية البصرية، الألوان، الخطوط، وتجربة المستخدم لضمان موقع جذاب وفعّال. ",
    titleEn:
      "How to Choose a Website Design That Reflects Your Brand Identity?",
    descEn:
      "Your website design is the first impression customers have of your brand, so it should be professional and reflective of your vision. In this article, we will help you choose the perfect design by understanding visual identity elements, colors, fonts, and user experience to ensure an attractive and effective website.",
    image: img1,
  },
];
const BlogComp = () => {
  const { t } = useTranslation();

  return (
    <div className="screenPadding my-8">
      {/* info  */}
      <div className="font-Title flex justify-between">
        <h1 className="text-2xl xl:text-3xl font-bold text-slate-200">
          <span className="text-primary ">{t("blogComp.title")}</span>
          {t("blogComp.span")}
        </h1>
        <button className="bg-primary px-2 py-1 cursor-pointer rounded-md font-bold text-gray-950 ">
          {" "}
          {t("blogComp.btn")}
        </button>
      </div>
      {/* image  */}
      <div className="my-8 flex justify-center items-center flex-wrap gap-2">
        {dataBlog.map((item, ind) => (
          <BlogCard key={ind} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogComp;
