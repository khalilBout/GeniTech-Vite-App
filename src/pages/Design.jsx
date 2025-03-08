import React from "react";
import Hero from "../component/Design/Hero";
import WhyUs from "../component/Design/WhyUs";
import Features from "../component/Design/Features";
import Steps from "../component/Design/Steps";
import Product from "../component/Product/Product";
import Profil from "../component/Profil/Profil";
import BlogComp from "../component/BlogComp/BlogComp";
import ContactPage from "../component/Contact/ContactPage";
import WhatsAppBtn from "../component/WhatsAppBtn/WhatsAppBtn";

const Design = () => {
  return (
    <div className=" ">
      <WhatsAppBtn />
      <Hero />
      <WhyUs />
      <Features />
      <Steps />
      <Product />
      <Profil />
      <BlogComp />
      <ContactPage />
    </div>
  );
};
export default Design;
