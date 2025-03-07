import { useTranslation } from "react-i18next";
import cookies from "js-cookie";


const CardProduct = ({ item }) => {
  const { t } = useTranslation();
  const lng = cookies.get("i18next") || "ar";


  return (
    <div className="m-4 flex max-w-[400px] bg-primary/30 rounded-md">
      {/* info div  */}
      <div className="w-1/2 h-full font-Title my-auto flex flex-col justify-center items-center">
        <h2 className="text-slate-200 p-3text-[14px] mdl:text-[15px] font-bold text-center">
        { lng === "ar"? item.title : item.titleEn }
        </h2>
        <p className="py-2 px-3 text-center text-[13px] text-slate-200">
        { lng === "ar"? item.desc : item.descEn }

        </p>
        <button className="px-4 py-1 bg-primary text-slate-200 font-bold cursor-pointer my-2 text-[14px]">
          {t("product.btn")}
        </button>
      </div>
      {/* image div  */}
      <div className="w-1/2 h-full rounded-md bg-slate-300">
        <img
          src={item.image}
          alt=""
          className="rounded-md w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardProduct;
