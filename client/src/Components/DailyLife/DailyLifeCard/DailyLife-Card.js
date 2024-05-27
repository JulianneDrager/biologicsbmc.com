import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
import { Image } from "react-bootstrap";
import useMediaQuery from "services/useMediaQuery";
import DailyLifeCardStyles from "./DailyLife-Card.module.css";

const DailyLifeCard = (props) => {
  const cardContainer = DailyLifeCardStyles.cardContainer;
  const iconImage = DailyLifeCardStyles.iconImage;
  const titleStyle = DailyLifeCardStyles.title;
  const articleStyle = DailyLifeCardStyles.article;
  const toggleBtn = DailyLifeCardStyles.toggleBtn;
  const divContentWrapper = DailyLifeCardStyles.divContentWrapper;

  const imagesContext = require.context("assets", true); // require.context must use dynamic paths, not absolute paths
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

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
      {(!matchedDesktop && (
        <main className={cardContainer}>
          <Accordion defaultActiveKey="0" alwaysOpen={false}>
            <div style={{ textAlign: "center" }}>
              <Image
                src={imagesContext(`./${props.iconMobilePath}`)}
                className={iconImage}
                alt=""
              />
              <h4 className={titleStyle}>{props.title}</h4>
            </div>
            <p className={articleStyle}>{props.article}</p>
            <div style={{ textAlign: "center" }}>
              {<ContextAwareToggle eventKey="1"></ContextAwareToggle>}
            </div>

            <Accordion.Collapse eventKey="1">
              <p className={articleStyle}>{props.articleExt}</p>
            </Accordion.Collapse>
          </Accordion>
        </main>
      )) || (
        <main className={cardContainer}>
          <div style={{ textAlign: "center" }}>
            <Image
              src={imagesContext(`./${props.iconDesktopPath}`)}
              className={iconImage}
              alt=""
            />
          </div>
          <div className={divContentWrapper}>
            <h4 className={titleStyle}>{props.title}</h4>
            <p className={articleStyle}>{props.article}</p>
            <p className={articleStyle}>{props.articleExt}</p>
          </div>
        </main>
      )}
    </>
  );
};

export default DailyLifeCard;
