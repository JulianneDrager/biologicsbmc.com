import React from "react";
import { Image } from "react-bootstrap";
import DailyLifeStyles from "./DailyLife.module.css";

import DailyLifeCard from "./DailyLifeCard/DailyLife-Card";
import DailyLifeCardsData from "./DailyLifeCard/DailyLife-Cards-data";

const DailyLifeDesktop = () => {
  const mainContainer = DailyLifeStyles.mainContainer;
  const titlesContainer = DailyLifeStyles.titlesContainer;
  const subTitlesContainer = DailyLifeStyles.subTitlesContainer;
  const contentContainer = DailyLifeStyles.contentContainer;
  const slideshowContainer = DailyLifeStyles.slideshowContainer;

  const dailyLifeCard = DailyLifeCardsData.map((item, index) => {
    return <DailyLifeCard key={index} {...item} />;
  });

  return (
    <main id="bio" className={mainContainer}>
      <div className={contentContainer}>
        <section className={titlesContainer}>
          <h2>
            THE DAILY LIFE OF <span>THE BIOMAZZE</span>
          </h2>
        </section>

        <section className={subTitlesContainer}>
          <h3>
            WHAT DOES A <span>BIOLOGIC COORDINATOR</span> DAY LOOK LIKE?
          </h3>
        </section>
        <section className={slideshowContainer}>
          {dailyLifeCard[0]}
          {dailyLifeCard[1]}
          {dailyLifeCard[2]}
          {dailyLifeCard[3]}
          {dailyLifeCard[4]}
          {dailyLifeCard[5]}
        </section>
      </div>
    </main>
  );
};

export default DailyLifeDesktop;
