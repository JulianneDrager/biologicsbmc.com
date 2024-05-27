import React from "react";
import RightChoiceStyles from "./RightChoice.module.css";
import HeaderStyles from "../Header/Header.module.css";

import useMediaQuery from "services/useMediaQuery";
import RightChoiceDesktop from "./RightChoiceDesktop";
import MapContainer from "./MapContainer";
import QuoteOne from "Components/Quote/Quote";

const RightChoice = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = RightChoiceStyles.mainContainer;
  const titleContainer = RightChoiceStyles.titleContainer;
  const contentContainer = RightChoiceStyles.contentContainer;
  const introContainer = RightChoiceStyles.introContainer;
  const reviewsContainer = HeaderStyles.reviewsContainer;
  const logoDiv = RightChoiceStyles.logoDiv;

  return (
    <>
      {!matchedDesktop && (
        <main id="right" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <div className={titleContainer}>
                <h3>Make The Right Choice With</h3>
                <div className={logoDiv}>
                  <h3>BIOMAZZE COORDINATION</h3>
                </div>
              </div>
              <h4>
                ITS A STRENUOUS <br /> MISSION & WE CAN HELP
              </h4>
              <p>
                We make the process simple and prepare you to help educate your
                patients with the latest and best knowledge accessible. We know
                it is difficult to get the right specialty medications having to
                walk through a maze to access the medicine, let us help you
                simplify that undertaking. We will teach you tips and tricks to
                get the job done with confidence and efficiency.
              </p>
              <h4>
                WE CAN TRAVEL AND <br /> TRAIN IN-HOUSE
              </h4>
              <p>
                Whether you need personal or corporate training, locally or
                nationally, we will meet your demand exceedingly. Whatever the
                challenge BioMazze will exceed it and accomplish every task.
              </p>
              <div>
                <MapContainer />
              </div>
            </div>
          </section>
          <div className={reviewsContainer}>
            <h4>
              <div
                style={{
                  display: "inline-block",
                  position: "relative",
                  top: "-8px",
                }}
              >
                <QuoteOne />
              </div>
              <b>Brandis is the best biologic coordinator in the game!</b>
              <div
                style={{
                  display: "inline-block",
                  rotate: "180deg",
                  position: "relative",
                  top: "3px",
                }}
              >
                <QuoteOne />
              </div>
            </h4>

            <p style={{ textAlign: "left", margin: "0 0 0 .8rem" }}>
              -- Dr.Sklar
            </p>
          </div>
          <section
            style={{
              padding: ".3rem",
              backgroundColor: "#2b5e86",
              width: "100%",
            }}
          ></section>
        </main>
      )}

      {matchedDesktop && <RightChoiceDesktop />}
    </>
  );
};

export default RightChoice;
