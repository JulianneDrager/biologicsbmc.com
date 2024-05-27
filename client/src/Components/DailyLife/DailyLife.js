import React from "react";
import DailyLifeStyles from "./DailyLife.module.css";
import DailyLifeDesktop from "./DailyLife-Desktop.js";
import useMediaQuery from "services/useMediaQuery";

import DailyLifeCard from "./DailyLifeCard/DailyLife-Card";
import DailyLifeCardsData from "./DailyLifeCard/DailyLife-Cards-data";
import DailyLifeSlideshow from "./DailyLifeSlideshow/DailyLife-Slideshow";

const DailyLife = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = DailyLifeStyles.mainContainer;
  const titlesContainer = DailyLifeStyles.titlesContainer;
  const subTitlesContainer = DailyLifeStyles.subTitlesContainer;
  const contentContainer = DailyLifeStyles.contentContainer;
  const slideshowContainer = DailyLifeStyles.slideshowContainer;

  const dailyLifeCard = DailyLifeCardsData.map((item, index) => {
    return <DailyLifeCard key={index} {...item} />;
  });

  return (
    <>
      {!matchedDesktop && (
        <main id="bio" className={mainContainer}>
          <div className={contentContainer}>
            <section className={titlesContainer}>
              <h2>THE DAY TO DAY STEPS</h2>
              <h1>OF THE BIOMAZZE</h1>
            </section>

            <section className={subTitlesContainer}>
              <h3>WHAT DOES A</h3>
              <h3>
                <span>BIOLOGIC COORDINATOR</span>
              </h3>
              <h3>DAY LOOK LIKE?</h3>
            </section>

            <section className={slideshowContainer}>
              <DailyLifeSlideshow />
            </section>
          </div>
        </main>
      )}

      {matchedDesktop && <DailyLifeDesktop />}
    </>
  );
};

export default DailyLife;
