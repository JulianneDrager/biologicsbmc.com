import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import {
  Accordion,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
import LikedIn from "../../assets/mobile/header/linkedIn.png";
import HeaderStyles from "./Header.module.css";
import DailyLifeCardStyles from "../DailyLife/DailyLifeCard/DailyLife-Card.module.css";
import useMediaQuery from "services/useMediaQuery";
import HeaderSlideshow from "./HeaderSlideshow/Header-Slideshow";
import HeaderDesktop from "./HeaderDesktop";
import textLogo from "../../assets/logo-text.png";
import QuoteOne from "Components/Quote/Quote";

const Header = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = HeaderStyles.mainContainer;
  const headerRow = HeaderStyles.headerRow;
  const logo = HeaderStyles.logo;
  const titleContainer = HeaderStyles.titleContainer;
  const slideshowContainer = HeaderStyles.slideshowContainer;
  const link = HeaderStyles.link;
  const contentContainer = HeaderStyles.contentContainer;
  const introContainer = HeaderStyles.introContainer;
  const scheduleButton = HeaderStyles.scheduleButton;
  const reviewsContainer = HeaderStyles.reviewsContainer;
  const logoImg = HeaderStyles.logoImg;
  const logoDiv = HeaderStyles.logoDiv;
  const toggleBtn2 = DailyLifeCardStyles.toggleBtn2;

  const url =
    "https://www.linkedin.com/posts/brandis-boyd-cooper-cma-cdt-b534431a5_access-activity-7115025415395545088-CpSG?utm_source=share&utm_medium=member_android&fbclid=IwAR0kEDt7lFxUzC2evdHFfIzwJjUubZDA_oANCDtKFaKEL6FCVAKWEqMpTi4";

  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <Button
        type="button"
        style={{ display: isCurrentEventKey ? "none" : "inline" }}
        onClick={decoratedOnClick}
        className={toggleBtn2}
      >
        {/* {children} */}
        {isCurrentEventKey ? "CLOSE" : "READ MORE"}
      </Button>
    );
  };

  return (
    <>
      {!matchedDesktop && (
        <main className={mainContainer}>
          <header className={headerRow}>
            <div className={logo}></div>

            <a href={url}>
              <Image src={LikedIn} className={link} />
            </a>
          </header>
          <div className={titleContainer}>
            <h3>Welcome to</h3>
            <div className={logoDiv}>
              <Image className={logoImg} src={textLogo} alt="logo" />
            </div>
          </div>
          <section className={slideshowContainer}>
            <HeaderSlideshow />
          </section>
          <section className={contentContainer}>
            <div className={introContainer}>
              <p
                style={{
                  margin: "1rem 0 -.2rem 0 ",
                  textAlign: "center",
                  // position: "relative",
                  // zIndex: "8",
                  // top: "-6rem",
                  color: "#c41326",
                  fontFamily: "Questrial",
                  fontWeight: "600",
                  fontSize: "6.8vw",
                  lineHeight: "7vw",
                }}
              >
                DESIGNED WITH <br />
                SPECIALTY MEDS <br />
                IN MIND!
              </p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "5vw",
                  margin: "1rem 0 0 0",
                }}
              >
                At BioMazze Coordination, we supply critical training to
                physicians and office staff, on specialty medications related to
                biologic therapy.
              </p>
              <p>
                Are you working with a patient fighting an autoimmune disease?
                If so, we can help train and equip you to navigate the sometimes
                arduous process of obtaining prescription medications for
                Rheumatology, Dermatology, Immunology, Asthma and Allergy.
              </p>
              <p>
                Here at BioMazze Coordination, we collaborate with patients,
                prescribing specialists, pharmacies, manufacturers, and
                insurance companies alike. We make sure to handle every patient
                with compassion and attention to detail by staying in contact,
                sending scripts, and confirming delivery. BioMazze is more than
                education, it is a lifestyle of servitude.
              </p>
              <Button href="/#contact" className={scheduleButton}>
                BOOK A CONSULTATION TODAY
              </Button>
            </div>

            <Accordion defaultActiveKey="0" alwaysOpen={false}>
              <div style={{ margin: "0 auto" }} className={reviewsContainer}>
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
                  <b>
                    Brandis is an asset to every office, provider and patient
                    she serves
                  </b>
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
                  <br />I have had the pleasure of knowing Brandis as a Biologic
                  Coordinator for over 15 years. She has dedicated herself to
                  learning and understanding the ever changing managed health
                  care landscape and she is an expert in the approval process of
                  Biologics and advanced systemic medications for chronic
                  conditions.
                  <div style={{ textAlign: "center" }}>
                    {<ContextAwareToggle eventKey="1"></ContextAwareToggle>}
                  </div>
                  <Accordion.Collapse eventKey="1">
                    <>
                      <br />
                      She is thorough and knowledgeable regarding the process of
                      prior authorization and understands the denial/approval
                      steps specific to individual health insurance plans.
                      <br /> <br />
                      Her experience as a Biologic Coordinator has allowed her
                      to be well versed in pharmaceutical companies, gathering
                      resources for patients to ensure that patients have access
                      to their treatments.
                      <br />
                      <br />
                      <p style={{ textAlign: "left", margin: "0 0 0 .8rem" }}>
                        -- Pharmaceutical Rep
                      </p>
                    </>
                  </Accordion.Collapse>
                </h4>
              </div>
            </Accordion>
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

      {matchedDesktop && <HeaderDesktop />}
    </>
  );
};

export default Header;
