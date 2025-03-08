import React from "react";
import Hero from "../component/DeskApp/Hero";
import WhyUs from "../component/DeskApp/WhyUs";
import Features from "../component/DeskApp/Features";
import Steps from "../component/DeskApp/Steps";
import Product from "../component/Product/Product";
import Profil from "../component/Profil/Profil";
import BlogComp from "../component/BlogComp/BlogComp";
import ContactPage from "../component/Contact/ContactPage";
import WhatsAppBtn from "../component/WhatsAppBtn/WhatsAppBtn";

const DesktopApp = () => {
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
export default DesktopApp;
