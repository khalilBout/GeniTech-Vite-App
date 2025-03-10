import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import Links from "./Links";
import Icons from "./Icons";
import MobileLink from "./MobileLink";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const LinkData = [
    {
      id: 1,
      name: t("link.home"),
      link: "/",
    },
    {
      id: 2,
      name: t("link.about"),
      link: "/",
    },
    {
      id: 3,
      name: t("link.services"),
      link: "/",
    },
    {
      id: 4,
      name: t("link.blog"),
      link: "/blog",
    },
    {
      id: 5,
      name: t("link.contact"),
      link: "/#contact",
    },
  ];

  return (
    <nav className="screenPadding fixed z-50 top-4 bg-[#CEEBFD] h-[50px] mdl:h-[72px] w-full flex justify-between items-center ">
      {/* logo sect  */}
      <Logo />
      <Links items={LinkData} />
      {open && <MobileLink items={LinkData} />}
      <div className="flex">
        <Icons />
        <button className="mdl:hidden" onClick={() => setOpen(!open)}>
          <RiMenu4Line size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
