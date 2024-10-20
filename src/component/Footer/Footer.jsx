import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();
  const FooterLinks = [
    {
      title: t("footer.link.home"),
      link: "/#",
    },
    {
      title: t("footer.link.ourProduct"),
      link: "/#about",
    },
    {
      title: t("footer.link.order"),
      link: "/#contact",
    },
    {
      title: t("footer.link.downloadApp"),
      link: "/#blog",
    },
  ];
  return (
    <div className=" bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            className="py-8 px-4"
          >
            <a
              href="/#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </a>
            <p className="  pt-4">
              {t("footer.title-1")}
              {t("footer.title-2")}
            </p>
            <a
              href="https://maps.app.goo.gl/SvoaSCsBDUdyrMqj9"
              target="_blank"
              className="flex gap-4 justify-center bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              {t("footer.location")}
              <FaLocationDot className="text-xl hover:text-primary duration-200" />
            </a>
          </motion.div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="py-4 px-4"
            >
              <h1 className="text-xl text-center font-semibold sm:text-left mb-3">
                {t("footer.quickLinks")}
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Address */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="py-4 px-4 col-span-2 sm:col-auto"
            >
              <h1 className="text-xl text-center font-semibold sm:text-left mb-3">
                {t("footer.address")}
              </h1>
              <div>
                <p className="mb-3">{t("footer.local")}</p>
                <p>{t("footer.phone")}</p>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
