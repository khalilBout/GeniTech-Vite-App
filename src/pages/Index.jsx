import Hero from "../component/Hero/Hero";
import Services from "../component/Services/Services";
import WhereToBuy from "../component/WhereToBuy/WhereToBuy";
import Footer from "../component/Footer/Footer";
import Order from "../component/Order/Order";

import snaw from "../assets/Snow.svg";
const bgImage = {
  backgroundImage: `url(${snaw})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Index = () => {
  return (
    <div style={bgImage} className=" overflow-hidden">
      <Hero />
      <Services />
      <Order />
      <WhereToBuy />
      <Footer />
    </div>
  );
};

export default Index;
