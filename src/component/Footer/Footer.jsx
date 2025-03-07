import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import logo from "../../assets/logo.svg";
import footerBg from "../../assets/footerBg.png";

// import footerImg from "../../assets/delivery/d2.png";

const bgImage = {
  backgroundImage: `url(${footerBg})`,
  backgroundSize: "cover",
  backgroundPosition: "left",
  backgroundRepeat: "no-repeat",
};

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
    <footer
      style={bgImage}
      className="min-h-[360px] flex flex-col justify-around items-center"
    >
      {/* info div  */}
      <div className="screenPadding my-6 font-Title flex flex-col mdl:flex-row justify-between items-center gap-2">
        {/* text div  */}
        <div className="w-full  mdl:w-[24%] flex flex-col">
          <div className="flex justify-center items-center ">
            <img
              src={logo}
              alt="logo"
              className=" w-[80%] max-w-[160px] h-auto"
            />
          </div>
          <p className="text-slate-200 text-[12px] text-center py-4">
            {t("footer.desc")}
          </p>
        </div>
        {/* link div  */}
        <div className="w-full  mdl:w-[46%] flex justify-center gap-12 text-slate-200">
          <div className="">
            <h2 className="text-[18px] font-bold py-2 ">
              {t("footer.service.title")}
            </h2>
            <ul className="text-[14px] ">
              <li className="my-1">
                <a href="" className="">
                  {t("footer.service.srv-1")}
                </a>
              </li>
              <li className="my-1">
                <a href="" className="">
                  {t("footer.service.srv-2")}
                </a>
              </li>
              <li className="my-1">
                <a href="" className="">
                  {t("footer.service.srv-3")}
                </a>
              </li>
              <li className="my-1">
                <a href="" className="">
                  {t("footer.service.srv-4")}
                </a>
              </li>
              <li className="my-1">
                <a href="" className="">
                  {t("footer.service.srv-5")}
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-[18px] font-bold py-2 ">
              {t("footer.links.title")}
            </h2>
            <ul className="text-[14px] ">
              <li className="my-1">
                <a href="" className="">
                  {t("footer.links.link-1")}
                </a>
              </li>
              <li className="my-1">
                <a href="" className="">
                  {t("footer.links.link-2")}
                </a>
              </li>
              <li className="my-1">
                <a href="" className="">
                  {t("footer.links.link-3")}
                </a>
              </li>
              <li className="my-1">
                <a href="" className="">
                  {t("footer.links.link-4")}
                </a>
              </li>
              <li className="my-1">
                <a href="" className="">
                  {t("footer.links.link-5")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* contact div  */}
        <div className="w-full mdl:w-[24%] flex flex-col items-center text-slate-200">
          <h2 className="text-[18px] font-bold py-2 ">
            {t("footer.contact.title")}
          </h2>
          <ul className="text-[14px] ">
            <li className="my-1 flex gap-2 items-start">
              <FaLocationDot className="text-primary " size={18} />
              <a href="" className="">
                {t("footer.contact.add")}
              </a>
            </li>
            <li className="my-1 flex gap-2 items-center">
              <FaPhoneAlt className="text-primary " size={18} />
              <a href="" className="">
                {t("footer.contact.phone")}
              </a>
            </li>
            <li className="my-1 flex gap-2 items-center">
              <MdMarkEmailRead className="text-primary " size={18} />
              <a href="" className="">
                {t("footer.contact.email")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* icons div   */}
      <div
        dir="ltr"
        className="screenPadding w-full bg-primary h-[45px] flex justify-between items-center "
      >
        <p className="text-[15px] text-black">
          ©2025 <span className="font-bold">GeniTech</span>, All Rights Reserved
        </p>
        <div className="flex justify-center items-center gap-4 text-black">
          <a href="" className="">
            <FaFacebook />
          </a>
          <a href="" className="">
            <FaInstagram />
          </a>
          <a href="" className="">
            <FaLinkedin />
          </a>
          <a href="" className="">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
