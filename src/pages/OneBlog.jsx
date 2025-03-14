import React from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import cookies from "js-cookie";

import img1 from "../assets/blog/b1.png";
import logoBg from "../assets/logoBg.png";
import BlogCard from "../component/BlogComp/BlogCard";

const dataOneBlog = {
  title:
    "كيف تجعل موقعك يتصدر نتائج البحث؟ دليل شامل لتحسين محركات البحث (SEO)",
  desc: "الكلمات المفتاحية (Keywords) هي العبارات التي يبحث عنها المستخدمون في محركات البحث. يجب أن تكون هذه الكلمات ذات صلة بمحتوى موقعك وأن يتم استخدامها بشكل استراتيجي داخل المقالات، العناوين، والأوصاف التعريفية (Meta Descriptions).",
  titleEn:
    "How to Make Your Website Top Search Results? A Comprehensive Guide to Search Engine Optimization (SEO)",
  descEn:
    "Keywords are the phrases that users search for in search engines. These words should be relevant to your site’s content and used strategically within articles, titles, and meta descriptions.",
  image: img1,
};

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
const OneBlog = ({}) => {
  const lng = cookies.get("i18next") || "ar";
  const { t } = useTranslation();

  return (
    <section className="screenPadding mt-20 flex flex-col items-center my-8">
      {/* image div  */}
      <div className="w-[80%] my-8 ">
        <img
          src={dataOneBlog.image}
          alt={dataOneBlog.titleEn}
          className="w-full h-auto"
        />
      </div>
      {/* info div  */}
      <div className="font-Title ">
        <h1 className="text-primary text-[16px] mdl:text-[20px] xl:text-[24px]">
          {lng === "ar" ? dataOneBlog.title : dataOneBlog.titleEn}
        </h1>
        <div className="min-h-[660px] relative">
          <p className="text-slate-200 text-[14px] md:text-[15px] xl:text-[16px]">
            <ReactMarkdown>
              {lng === "ar" ? dataOneBlog.desc : dataOneBlog.descEn}
            </ReactMarkdown>
          </p>
          <div className=" absolute top-0 left-0 right-0">
            <img src={logoBg} alt="logo Bg" className="h-full w-auto" />
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-slate-200 text-xl mdl:text-2xl font-Title my-3 ">
          {t("blog.titleInTheBlog")}
        </h1>
        <div className="w-full h-[1px] bg-primary"></div>

        <div className=" my-4 flex flex-wrap justify-center gap-2">
          {dataBlog.map((item, ind) => (
            <BlogCard key={ind} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneBlog;
