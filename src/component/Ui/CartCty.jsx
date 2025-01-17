import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CartCty = ({ item }) => {
  const { t } = useTranslation();
  const direction = window.document.dir;
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        background: "#fff",
      }}
      className=" relative w-full h-full group rounded-lg bg-primary/30"
    >
      <div className=" absolute -left-[40%] top-0 z-10 h-[220px] w-auto group-hover:-z-10 ">
        <motion.img
          initial={{ opacity: 1, x: 30 }}
          whileInView={{ opacity: 1, x: -20, rotateZ: -12 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.4,
          }}
          src={item.image}
          alt={item.title}
          className="img-shadow2 h-full w-auto object-fill object-center"
        />
      </div>
      <div className="w-full h-full px-4 pt-8  relative">
        <div className=" font-titleAr text-2xl font-bold text-primary">
          {direction === "rtl" ? (
            <h1>{item.titleAr}</h1>
          ) : (
            <h1>{item.title}</h1>
          )}
        </div>
        <div className="text-gray-700 group-hover:text-darkGray font-bodyAr">
          {direction === "rtl" ? (
            <p>{item.subtitleAr}</p>
          ) : (
            <p>{item.subtitle}</p>
          )}
        </div>
        <button className=" group-hover:scale-110 group-hover:text-white group-hover:bg-rose-700 absolute bottom-2 right-2  bg-rose-300 text-gray-600 py-1 px-3 cursor-pointer rounded-md">
          <span className=" font-bold py-2">{item.price}</span> {t("hero.unit")}
        </button>
      </div>
    </motion.div>
  );
};

export default CartCty;
