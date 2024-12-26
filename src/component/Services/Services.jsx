import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee2 from "../../assets/coffee/coffee3.png";
import Coffee3 from "../../assets/coffee/coffee1.png";

const Services = () => {
  const { t } = useTranslation();
  const direction = window.document.dir;

  const serverData = [
    {
      id: 1,
      image: Coffee1,
      title: "Black Coffee",
      titleAr: "القهوة السوداء",
      subtitle:
        "Rich and bold black coffee brewed to perfection for a robust, full-bodied experience.",
      subtitleAr:
        "قهوة سوداء غنية وقوية محضرة بإتقان لتقدم تجربة مذاق جريئة ومتكاملة.",
    },
    {
      id: 2,
      image: Coffee2,
      title: "Hot Coffee",
      titleAr: "القهوة الساخنة",
      subtitle:
        "A warm cup of freshly brewed hot coffee to energize your day with its smooth flavor.",
      subtitleAr:
        "فنجان دافئ من القهوة الساخنة الطازجة لتحفيز يومك بمذاقها السلس والمميز.",
    },
    {
      id: 3,
      image: Coffee3,
      title: "Cold Coffee",
      titleAr: "القهوة المثلجة",
      subtitle:
        "A refreshing cold coffee blend that perfectly balances boldness and smoothness for a cool pick-me-up.",
      subtitleAr:
        "خليط منعش من القهوة المثلجة التي توازن بين القوة والنعومة لتجربة مثالية في أي وقت.",
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
  return (
    <div className=" container my-16 space-y-4">
      {/* heder section  */}
      <div className="text-center max-w-lg mx-auto space-y-2 ">
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
          {t("services.titleGray")}
          <span className=" px-2 text-primary">{t("services.titleOrng")}</span>
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
          {t("services.desc")}
        </motion.p>
      </div>
      {/* cart section  */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.1 }}
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-8"
      >
        {serverData.map((item) => (
          <motion.div
            variants={cardVariants}
            key={item.id}
            className="text-center p-4 space-y-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className=" img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <div className=" font-titleAr text-2xl font-bold text-primary">
                {direction === "rtl" ? (
                  <h1>{item.titleAr}</h1>
                ) : (
                  <h1>{item.title}</h1>
                )}
              </div>
              <div className="text-darkGray font-bodyAr">
                {direction === "rtl" ? (
                  <p>{item.subtitleAr}</p>
                ) : (
                  <p>{item.subtitle}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
