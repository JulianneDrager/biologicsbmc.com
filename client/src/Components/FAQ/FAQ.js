import React from "react";
import FAQStyles from "./FAQ.module.css";
import Navigation from "Components/Nav/Nav";
import CheckListProps from "./FAQProps";
import FAQData from "./FAQData";
import useMediaQuery from "services/useMediaQuery";
import Footer from "Components/Footer/Footer";

const FAQ = () => {
  const FAQList = FAQData.map((data) => {
    return <CheckListProps key={data.id} {...data} />;
  });

  const contentContainer = FAQStyles.contentContainer;
  const mainStyle = FAQStyles.mainStyle;

  const matches768 = useMediaQuery("(min-width:767px)");

  return (
    <>
      <Navigation />
      <main
        className={mainStyle}
        style={{
          maxWidth: "1700px",
          margin: "0 auto",
          padding: "1rem",
          backgroundColor: "white",
        }}
      >
        <h1>Frequent Asked Questions</h1>
        <section className={contentContainer}>{FAQList}</section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
