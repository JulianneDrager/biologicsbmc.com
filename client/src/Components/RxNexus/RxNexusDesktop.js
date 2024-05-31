import React from "react";
import { Image } from "react-bootstrap";
import RxNexusLogo from "../../assets/RxNexusLogo.jpg";
import BioMazzeLogo from "../../assets/logo.png";
import RxNexusImg from "../../assets/rxnexus.jpg";
import RxNexusStyles from "./RxNexus.module.css";
import useMediaQuery from "services/useMediaQuery";

const RxNexusDesktop = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = RxNexusStyles.mainContainer;
  const titleContainer = RxNexusStyles.titleContainer;
  const contentContainer = RxNexusStyles.contentContainer;
  const introContainer = RxNexusStyles.introContainer;
  const profileImg = RxNexusStyles.profileImg;
  const divider = RxNexusStyles.divider;
  const logoDiv = RxNexusStyles.logoDiv;
  const bioMazzeLogo = RxNexusStyles.bioMazzeLogo;
  const rxNexusLogo = RxNexusStyles.rxNexusLogo;
  const logos = RxNexusStyles.logos;

  return (
    <>
      {matchedDesktop && (
        <main id="Director" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <Image
                className={profileImg}
                src={RxNexusImg}
                alt="RxNexus Image"
              />
              <div>
                <div className={logos}>
                  <Image
                    className={bioMazzeLogo}
                    src={BioMazzeLogo}
                    alt="BioMazze logo"
                  />
                  <Image
                    className={rxNexusLogo}
                    src={RxNexusLogo}
                    alt="RxNexus logo"
                  />
                </div>

                <div className={logoDiv}>
                  <h3>BIOMAZZE HAS PARTNERED WITH RXNEXUS</h3>
                  <div className={titleContainer}>
                    <h3>TO STREAMLINE ACCESS COORDINATION</h3>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                ></div>
              </div>
            </div>
          </section>
          <section className={divider}></section>
        </main>
      )}
    </>
  );
};

export default RxNexusDesktop;
