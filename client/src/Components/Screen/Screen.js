import React from "react";
import Navigation from "../Nav/Nav";
import Header from "../Header/Header";
import RightChoice from "../RightChoice/RightChoice";
import About from "../About/About";
import Training from "Components/Training/Training";
import DailyLife from "Components/DailyLife/DailyLife";
import HiringForm from "../Hiring/HiringForm";
import Footer from "Components/Footer/Footer";
import Contact from "Components/Contact/Contact";
import Director from "Components/Director/Director";

const Screen = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1700px",
          margin: "0 auto",
          position: "relative",
          zIndex: "1",
          backgroundColor: "white",
        }}
      >
        <Navigation />
        <Header />
        <RightChoice />
        <About />
        <Director />
        <Training />
        <DailyLife />
        <HiringForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Screen;
