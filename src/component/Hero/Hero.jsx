import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero/hero-1.png";

// const dataProducts = [
//   {
//     name: "Glace à la vanille royale",
//     nameAr: "يس كريم الفانيليا الملكية",
//     dect: "Crémeuse, douce, et préparée avec la meilleure vanille naturelle.",
//     dectAr: "تجربة فاخرة للنقاء الكريمي.",
//     price: "250",
//     // img: cty1,
//   },
//   {
//     name: "Pack Chocolat Noir",
//     nameAr: "عبوة الشوكولاتة الداكنة",
//     dect: "Intense et riche, réalisée avec le cacao belge le plus fin.",
//     dectAr: "نكهة قوية لمحبي الشوكولاتة.",
//     price: "270",
//     // img: cty2,
//   },
//   {
//     name: "Pack Fraises Fraîches",
//     nameAr: "عبوة الفراولة الطازجة",
//     dect: "Rafraîchissante et pleine de saveur, avec des fraises locales.",
//     dectAr: "منعشة ومثالية لمحبي الفواكه.",
//     price: "190",
//     // img: cty3,
//   },
//   {
//     name: "Pack Mangue Tropicale",
//     nameAr: "عبوة المانجو الغني",
//     dect: "Une combinaison unique de crème soyeuse et de morceaux de biscuit croquants.",
//     dectAr: "مذاق استوائي مثالي لأيام الصيف.",
//     price: "220",
//     // img: cty4,
//   },
// ];

const Hero = () => {
  const { t } = useTranslation();
  const direction = window.document.dir;

  return (
    <section className="mt-20 mdl:h-screen flex justify-center items-center">
      {/* info dev  */}
      <div className="mt-36 mdl:mt-28 mdl:w-2/5 font-Title h-full m-12">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="py-2 text-2xl sm:text-3xl  xl:text-6xl text-primary mt-4 mdl:mt-16 xl:my-4"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="text-slate-200 text-xl sm:text-2xl xl:text-4xl "
        >
          {t("hero.suTitle")}
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="text-slate-200 text-[12px] md:text-[14px] mdl:text-[15px] my-4"
        >
          {t("hero.desc")}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="mt-12 flex justify-end gap-4"
        >
          <button className="px-2 py-1 md:px-4 md:py-2 text-[12px] md:text-[14] border border-primary text-slate-200 hover:bg-primary hover:text-black cursor-pointer duration-150 transition-all font-bold">
            {t("hero.btn-1")}
          </button>
          <button className="px-2 py-1 md:px-4 md:py-2 text-[12px] md:text-[14] border border-primary text-black bg-primary hover:text-primary hover:bg-transparent cursor-pointer duration-150 transition-all font-bold">
            {t("hero.btn-2")}
          </button>
        </motion.div>
      </div>

      {/* image dev  */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
        className="max-mdl:absolute max-mdl:top-20 max-mdl:left-0 max-mdl:right-0 max-mdl:opacity-10 max-mdl:w-full mdl:w-3/5 h-full "
      >
        <img src={heroImg} alt="" className="w-full h-auto opacity-15 mdl:opacity-100 " />
      </motion.div>
    </section>
  );
};

export default Hero;
