import React from "react";
import { Button, Image } from "react-bootstrap";
import DirectorImage from "../../assets/mobile/about/profile-director.jpg";
import DirectorStyles from "./Director.module.css";

import useMediaQuery from "services/useMediaQuery";
import DirectorDesktop from "./DirectorDesktop";

const Director = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = DirectorStyles.mainContainer;
  const titleContainer = DirectorStyles.titleContainer;
  const contentContainer = DirectorStyles.contentContainer;
  const introContainer = DirectorStyles.introContainer;
  const scheduleButton = DirectorStyles.scheduleButton;
  const profileImg = DirectorStyles.profileImg;
  const logoDiv = DirectorStyles.logoDiv;

  const hrSelector = { margin: ".5rem 0", border: "none" };

  return (
    <>
      {!matchedDesktop && (
        <main id="Director" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <div className={titleContainer}>
                <h3 style={{ textTransform: "uppercase" }}>
                  Director of education and <br /> on-boarding
                  <br />
                </h3>
                <div className={logoDiv}>
                  <h3 style={{ textTransform: "uppercase" }}>
                    Keri Janicek-McCurry, LVN
                  </h3>
                </div>
              </div>

              <Image
                className={profileImg}
                src={DirectorImage}
                alt="Keri Janicek-Mccurry, LVN"
              />

              <p>
                Keri is a Biologic Coordinator for a large dermatology practice
                in the DFW Metroplex. She actively manages and oversees all
                biologics and systemic medications for 16 providers. She is an
                access speaker and advisory board member for multiple
                pharmaceutical companies.
                <hr style={hrSelector} />
                Keri has over eight years of experience in biologics and trained
                under the infamous Dr. Alan Menter and Mary Wiatrowski, RN, DNC.
                Keri also is the Vice President and co-founder of ACBC.
              </p>

              <Button href="/#contact" className={scheduleButton}>
                BOOK A CONSULTATION TODAY
              </Button>
            </div>
          </section>
          <section
            style={{
              padding: ".3rem",
              backgroundColor: "#2b5e86",
              width: "100%",
            }}
          ></section>
        </main>
      )}

      {matchedDesktop && <DirectorDesktop />}
    </>
  );
};

export default Director;
