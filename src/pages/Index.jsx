import Hero from "../component/Hero/Hero";
import Statistic from "../component/Statistic/Statistic";
import Services from "../component/Services/Services";
import About from "../component/About/About";
import Product from "../component/Product/Product";
import Profil from "../component/Profil/Profil";
import Comment from "../component/Comment/Comment";
import BlogComp from "../component/BlogComp/BlogComp";
import Contact from "../component/Contact/Contact";
import WhatsAppBtn from "../component/WhatsAppBtn/WhatsAppBtn";

import Summary from "../component/Summary/Summary";

const Index = () => {
  return (
    <>
      <WhatsAppBtn />
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
    </>
  );
};

export default Index;
