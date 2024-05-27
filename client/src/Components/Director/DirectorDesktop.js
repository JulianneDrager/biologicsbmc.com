import React from "react";
import { Button, Image } from "react-bootstrap";
import DirectorImage from "../../assets/mobile/about/profile-director.jpg";
import DirectorStyles from "./Director.module.css";
import useMediaQuery from "services/useMediaQuery";

const DirectorDesktop = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = DirectorStyles.mainContainer;
  const titleContainer = DirectorStyles.titleContainer;
  const contentContainer = DirectorStyles.contentContainer;
  const introContainer = DirectorStyles.introContainer;
  const scheduleButton = DirectorStyles.scheduleButton;
  const profileImg = DirectorStyles.profileImg;
  const divider = DirectorStyles.divider;
  const logoDiv = DirectorStyles.logoDiv;
  const hrSelector = { margin: ".5rem 0", border: "none" };

  return (
    <>
      {matchedDesktop && (
        <main id="Director" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <Image
                className={profileImg}
                src={DirectorImage}
                alt="Keri Janicek-McCurry, LVN"
              />
              <div>
                <div className={logoDiv}>
                  <h3>KERI JANICEK-MCCURRY, LVN</h3>
                  <div className={titleContainer}>
                    <h3>DIRECTOR OF EDUCATION AND ON-BOARDING</h3>
                  </div>
                </div>

                <p>
                  Keri is a Biologic Coordinator for a large dermatology
                  practice in the DFW Metroplex. She actively manages and
                  oversees all biologics and systemic medications for 16
                  providers. She is an access speaker and advisory board member
                  for multiple pharmaceutical companies.
                  <hr style={hrSelector} />
                  Keri has over eight years of experience in biologics and
                  trained under the infamous Dr. Alan Menter and Mary
                  Wiatrowski, RN, DNC. Keri also is the Vice President and
                  co-founder of ACBC.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button href="/#contact" className={scheduleButton}>
                    BOOK A CONSULTATION TODAY
                  </Button>
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

export default DirectorDesktop;
