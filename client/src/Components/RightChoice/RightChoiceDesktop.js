import React from "react";
import RightChoiceStyles from "./RightChoice.module.css";

import useMediaQuery from "services/useMediaQuery";
import MapContainer from "./MapContainer";
import QuoteOne from "Components/Quote/Quote";

const RightChoiceDesktop = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = RightChoiceStyles.mainContainer;
  const titleContainer = RightChoiceStyles.titleContainer;
  const contentContainer = RightChoiceStyles.contentContainer;
  const introContainer = RightChoiceStyles.introContainer;
  const reviewsContainer = RightChoiceStyles.reviewsContainer;
  const divider = RightChoiceStyles.divider;
  const logoDiv = RightChoiceStyles.logoDiv;

  return (
    <>
      {matchedDesktop && (
        <main id="right" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <div className={titleContainer}>
                <h3>Make The Right Choice With</h3>
                <div className={logoDiv}>
                  <h3>BIOMAZZE COORDINATION</h3>
                </div>
              </div>
              <h4>ITS A STRENUOUS MISSION & WE CAN HELP</h4>
              <p>
                We make the process simple and prepare you to help educate your
                patients with the latest and best knowledge accessible. We know
                it is difficult to get the right specialty medications having to
                walk through a maze to access the medicine, let us help you
                simplify that undertaking. We will teach you tips and tricks to
                get the job done with confidence and efficiency.
              </p>
              <h4>WE CAN TRAVEL AND TRAIN IN-HOUSE</h4>
              <p>
                Whether you need personal or corporate training, locally or
                nationally, we will meet your demand exceedingly. Whatever the
                challenge BioMazze will exceed it and accomplish every task.
              </p>
              <div>
                <MapContainer />
              </div>

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
                  Brandis is an asset to every office, provider and patient she
                  serves
                </h4>

                <div>
                  I have had the pleasure of knowing Brandis as a Biologic
                  Coordinator for over 15 years. She has dedicated herself to
                  learning and understanding the ever changing managed health
                  care landscape and she is an expert in the approval process of
                  Biologics and advanced systemic medications for chronic
                  conditions. She is thorough and knowledgeable regarding the
                  process of prior authorization and understands the
                  denial/approval steps specific to individual health insurance
                  plans. Her experience as a Biologic Coordinator has allowed
                  her to be well versed in pharmaceutical companies, gathering
                  resources for patients to ensure that patients have access to
                  their treatments.
                  <br />
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
                  <p style={{ textAlign: "left", margin: "0 0 0 .8rem" }}>
                    -- Pharmaceutical Rep
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={divider}></section>
        </main>
      )}
    </>
  );
};

export default RightChoiceDesktop;
