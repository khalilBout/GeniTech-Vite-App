import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

const CardProfil = ({ item }) => {
  const { t } = useTranslation();
  const lng = cookies.get("i18next") || "ar";

  return (
    <div className=" relative m-4 flex max-w-[220px] h-[320px] bg-primary/30 rounded-md">
      {/* info div  */}
      <div className="w-[90%] h-[70%] rounded-md bg-primary/90 absolute -bottom-4 left-8 font-Title my-auto flex flex-col justify-center items-center">
        <h2 className="text-gray-900 p-2 text-[14px] font-bold text-center">
          {lng === "ar" ? item.title : item.titleEn}
        </h2>
        <p className=" px-3 text-center text-[12px] font-bold text-gray-800">
          {lng === "ar" ? item.desc : item.descEn}
        </p>
        <button className="px-4  bg-slate-200 text-gray-900 font-bold cursor-pointer my-2 text-[14px]">
          {t("product.btn")}
        </button>
      </div>
      {/* image div  */}
      <div className="w-full h-full ">
        <img
          src={item.image}
          alt=""
          className="rounded-md w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardProfil;
