import React from "react";
import HeaderStyles from "./Header.module.css";
import { Button, Image } from "react-bootstrap";
import LikedIn from "../../assets/mobile/header/linkedIn.png";

import useMediaQuery from "services/useMediaQuery";
import HeaderSlideshow from "./HeaderSlideshow/Header-Slideshow";
import textLogo from "../../assets/logo-text.png";
import QuoteOne from "Components/Quote/Quote";

const HeaderDesktop = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = HeaderStyles.mainContainer;
  const logo = HeaderStyles.logo;
  const titleContainerDesktop = HeaderStyles.titleContainerDesktop;
  const titleDivider = HeaderStyles.titleDivider;
  const slideshowContainer = HeaderStyles.slideshowContainer;
  const socialContainer = HeaderStyles.socialContainer;
  const link = HeaderStyles.link;
  const contentContainer = HeaderStyles.contentContainer;
  const introContainerDesktop = HeaderStyles.introContainerDesktop;
  const scheduleButton = HeaderStyles.scheduleButton;
  const reviewsContainer = HeaderStyles.reviewsContainer;
  const slogan = HeaderStyles.slogan;
  const desktopBgImage = HeaderStyles.desktopBgImage;
  const divider = HeaderStyles.divider;
  const logoImg = HeaderStyles.logoImg;
  const logoDiv = HeaderStyles.logoDiv;

  const url =
    "https://www.linkedin.com/posts/brandis-boyd-cooper-cma-cdt-b534431a5_access-activity-7115025415395545088-CpSG?utm_source=share&utm_medium=member_android&fbclid=IwAR0kEDt7lFxUzC2evdHFfIzwJjUubZDA_oANCDtKFaKEL6FCVAKWEqMpTi4";

  return (
    <>
      {matchedDesktop && (
        <main className={mainContainer}>
          <span className={desktopBgImage}></span>
          <span className={socialContainer}>
            <a href={url}>
              <Image src={LikedIn} className={link} />
            </a>{" "}
          </span>
          <section className={slideshowContainer}>
            <HeaderSlideshow />
          </section>

          <section className={contentContainer}>
            <div className={logo}></div>

            <div className={introContainerDesktop}>
              <div className={titleContainerDesktop}>
                <h3>Welcome to</h3>
                <div className={logoDiv}>
                  <Image className={logoImg} src={textLogo} alt="logo" />
                </div>
              </div>
              <span className={titleDivider} />
              <div
                style={{
                  backgroundColor: "#ffffffb3",
                  padding: ".5rem 1rem 1rem 1rem",
                }}
              >
                <p className={slogan}>DESIGNED WITH SPECIALTY MEDS IN MIND!</p>
                <p>
                  At BioMazze Coordination, we supply critical training to
                  physicians and office staff, on specialty medications related
                  to biologic therapy. Are you working with a patient fighting
                  an autoimmune disease? If so, we can help train and equip you
                  to navigate the sometimes arduous process of obtaining
                  prescription medications for Rheumatology, Dermatology,
                  Immunology, Asthma and Allergy.
                </p>
                <p>
                  Here at BioMazze Coordination, we collaborate with patients,
                  prescribing specialists, pharmacies, manufacturers, and
                  insurance companies alike. We make sure to handle every
                  patient with compassion and attention to detail by staying in
                  contact, sending scripts, and confirming delivery. BioMazze is
                  more than education, it is a lifestyle of servitude.
                </p>
              </div>
            </div>
            {/* might be a moving slideshow? */}
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
            <Button href="/#contact" className={scheduleButton}>
              BOOK A CONSULTATION TODAY
            </Button>
          </section>
          <section className={divider}></section>
        </main>
      )}
    </>
  );
};

export default HeaderDesktop;
