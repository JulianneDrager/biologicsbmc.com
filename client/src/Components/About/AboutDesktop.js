import React from "react";
import { Button, Image } from "react-bootstrap";
import AboutImage from "../../assets/mobile/about/profile.jpg";
import AboutStyles from "./About.module.css";
import useMediaQuery from "services/useMediaQuery";

const AboutDesktop = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = AboutStyles.mainContainer;
  const titleContainer = AboutStyles.titleContainer;
  const contentContainer = AboutStyles.contentContainer;
  const introContainer = AboutStyles.introContainer;
  const scheduleButton = AboutStyles.scheduleButton;
  const profileImg = AboutStyles.profileImg;
  const divider = AboutStyles.divider;
  const logoDiv = AboutStyles.logoDiv;
  const hrSelector = { margin: ".5rem 0", border: "none" };

  return (
    <>
      {matchedDesktop && (
        <main id="about" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <Image
                className={profileImg}
                src={AboutImage}
                alt="Brandis-Boyd Cooper"
              />
              <div>
                <div className={logoDiv}>
                  <h3>BRANDIS-BOYD COOPER</h3>
                  <div className={titleContainer}>
                    <h3>CMA/CDT President and Co-Founder of ACBC</h3>
                  </div>
                </div>

                <p>
                  Brandis is a Biologic, Access Coordinator with over twenty
                  years of experience. Her specialty focuses have included
                  immune dermatology with crossover training in rheumatology.
                  <hr style={hrSelector} />
                  Her diverse experience, knowledge, and profound passion have
                  enabled her to teach others a proficient workflow for
                  processing multiple variations of specialty medications
                  including orals, injectables, topicals, and outpatient
                  infusion coordination. area.
                  <hr style={hrSelector} />
                  Brandis is a renowned industry speaker and KOL. She has worked
                  with multiple profound physicians and mid-level providers
                  including Melissa Costner, M.D., Jennifer Cather. M.D.,
                  Melodie Young, N.P., Daniel Walker, M.D. and Dario
                  Kivelevitch, M.D. She is the founder and CEO of BioMazze
                  Coordination, President and Co-Founder of Access Coordinator
                  Boot Camp, and the Regional Biologic Coordinator for US
                  Dermatology Partners in the DFW area.
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

export default AboutDesktop;
