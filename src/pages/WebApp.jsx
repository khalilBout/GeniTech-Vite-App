import React from "react";
import Hero from "../component/WebApp/Hero";
import WhyUs from "../component/WebApp/WhyUs";
import Features from "../component/WebApp/Features";
import Steps from "../component/WebApp/Steps";
import Product from "../component/Product/Product";
import Profil from "../component/Profil/Profil";
import BlogComp from "../component/BlogComp/BlogComp";
import ContactPage from "../component/Contact/ContactPage";
import WhatsAppBtn from "../component/WhatsAppBtn/WhatsAppBtn";

const WebApp = () => {
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

export default WebApp;
