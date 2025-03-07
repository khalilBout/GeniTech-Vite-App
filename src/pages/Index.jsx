import Hero from "../component/Hero/Hero";
import Statistic from "../component/Statistic/Statistic";
import Services from "../component/Services/Services";
import About from "../component/About/About";
import Product from "../component/Product/Product";
import Profil from "../component/Profil/Profil";
import Comment from "../component/Comment/Comment";
import BlogComp from "../component/BlogComp/BlogComp";
import Contact from "../component/Contact/Contact";

import bg from "../assets/bg.svg";
import Summary from "../component/Summary/Summary";
import Footer from "../component/Footer/Footer";
const bgImage = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Index = () => {
  return (
    <div style={bgImage} className="overflow-hidden ">
      <Hero />
      <Statistic />
      <Services />
      <About />
      <Product />
      <Profil />
      <Comment />
      <BlogComp />
      <Contact />
      <Summary />
      <Footer />
    </div>
  );
};

export default Index;
