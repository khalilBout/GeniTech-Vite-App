import logo from "../../assets/logo.svg";
const Logo = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img src={logo} alt="" className="h-[35px] mdl:h-[45px] w-auto" />
    </div>
  );
};

export default Logo;
