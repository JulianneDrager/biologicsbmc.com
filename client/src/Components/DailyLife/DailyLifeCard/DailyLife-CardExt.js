import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
import useMediaQuery from "services/useMediaQuery";
import DailyLifeCardStyles from "./DailyLife-Card.module.css";
import DailyLifeSlideshowStyles from "../DailyLifeSlideshow/DailyLife-Slideshow.module.css";

import DailyLifeCard from "./DailyLife-Card";
import DailyLifeCardsData from "./DailyLife-Cards-data";

const DailyLifeCardExt = () => {
  const cardContainer = DailyLifeCardStyles.cardContainer;
  const toggleBtn = DailyLifeCardStyles.toggleBtn;
  const slidesContainer = DailyLifeSlideshowStyles.slidesContainer;
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const dailyLifeCardExt = DailyLifeCardsData.map((item, index) => {
    return <DailyLifeCard key={index} {...item} />;
  });

  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <button
        type="button"
        style={{
          padding: "1.5vw",
          borderRadius: ".3rem",
        }}
        // className={toggleBtn}
        onClick={decoratedOnClick}
        className={toggleBtn}
      >
        {/* {children} */}
        {isCurrentEventKey ? "CLOSE" : "LEARN MORE"}
      </button>
    );
  };

  return (
    <>
      {!matchedDesktop && (
        <main className={cardContainer}>
          <Accordion defaultActiveKey="0" alwaysOpen={false}>
            <div className={slidesContainer}>
              {dailyLifeCardExt[0]}
              {dailyLifeCardExt[1]}
              {<ContextAwareToggle eventKey="1"></ContextAwareToggle>}
            </div>
            <Accordion.Collapse eventKey="1">
              <div className={slidesContainer}>
                {dailyLifeCardExt[2]}
                {dailyLifeCardExt[3]}
              </div>
              <div className={slidesContainer}>
                {dailyLifeCardExt[4]}
                {dailyLifeCardExt[5]}
              </div>
            </Accordion.Collapse>
          </Accordion>
        </main>
      )}
    </>
  );
};

export default DailyLifeCardExt;
