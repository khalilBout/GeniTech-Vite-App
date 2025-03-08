import React from "react";
import Hero from "../component/PhoneApp/Hero";
import WhyUs from "../component/PhoneApp/WhyUs";
import Features from "../component/PhoneApp/Features";
import Steps from "../component/PhoneApp/Steps";
import Product from "../component/Product/Product";
import Profil from "../component/Profil/Profil";
import BlogComp from "../component/BlogComp/BlogComp";
import ContactPage from "../component/Contact/ContactPage";
import WhatsAppBtn from "../component/WhatsAppBtn/WhatsAppBtn";

const PhoneApp = () => {
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
export default PhoneApp;
