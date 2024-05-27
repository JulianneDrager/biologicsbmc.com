import React from "react";
import DailyLifeSlideshowStyles from "./DailyLife-Slideshow.module.css";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

import DailyLifeCard from "../DailyLifeCard/DailyLife-Card";
import DailyLifeCardsData from "../DailyLifeCard/DailyLife-Cards-data";

const DailyLifeSlideshow = () => {
  // const slideshow = DailyLifeSlideshowStyles.slideshow;
  const slidesContainer = DailyLifeSlideshowStyles.slidesContainer;
  const btn = DailyLifeSlideshowStyles.btn;
  // const carouselItem = DailyLifeSlideshowStyles.carouselItem;

  // const responsive = {
  //   default: {
  //     breakpoint: { max: 3000, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   },
  // };

  const dailyLifeCard = DailyLifeCardsData.map((item, index) => {
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
      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          className={btn}
          onClick={decoratedOnClick}
          // className={toggleBtn}
        >
          {/* {children} */}
          {isCurrentEventKey ? "CLOSE" : "READ MORE"}
        </button>
      </div>
    );
  };
  return (
    <Accordion defaultActiveKey="0">
      <div className={slidesContainer}>
        {dailyLifeCard[0]}
        {dailyLifeCard[1]}
      </div>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          <div className={slidesContainer}>
            {dailyLifeCard[2]}
            {dailyLifeCard[3]}
          </div>
          <div className={slidesContainer}>
            {dailyLifeCard[4]}
            {dailyLifeCard[5]}
          </div>
        </Card.Body>
      </Accordion.Collapse>
      <ContextAwareToggle eventKey="1"></ContextAwareToggle>
    </Accordion>
  );
};

export default DailyLifeSlideshow;
