import React from "react";
import { Image } from "react-bootstrap";
import RxNexusLogo from "../../assets/RxNexusLogo.jpg";
import BioMazzeLogo from "../../assets/logo.png";
import RxNexusImg from "../../assets/rxnexus.jpg";
import RxNexusStyles from "./RxNexus.module.css";

import useMediaQuery from "services/useMediaQuery";
import RxNexusDesktop from "./RxNexusDesktop";

const RxNexus = () => {
  const matchedDesktop = useMediaQuery("(min-width: 728px)");

  const mainContainer = RxNexusStyles.mainContainer;
  const titleContainer = RxNexusStyles.titleContainer;
  const contentContainer = RxNexusStyles.contentContainer;
  const introContainer = RxNexusStyles.introContainer;
  const profileImg = RxNexusStyles.profileImg;
  const logoDiv = RxNexusStyles.logoDiv;
  const bioMazzeLogo = RxNexusStyles.bioMazzeLogo;
  const rxNexusLogo = RxNexusStyles.rxNexusLogo;
  const logos = RxNexusStyles.logos;

  return (
    <>
      {!matchedDesktop && (
        <main id="Director" className={mainContainer}>
          <section className={contentContainer}>
            <div className={introContainer}>
              <div className={titleContainer}>
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

                <h3 style={{ textTransform: "uppercase" }}>
                  Biomazze Has Partnered <br /> with RXNexus
                </h3>
                <div className={logoDiv}>
                  <h3 style={{ textTransform: "uppercase" }}>
                    to streamline access Coordination
                  </h3>
                </div>
              </div>

              <Image
                className={profileImg}
                src={RxNexusImg}
                alt="RxNexus Image"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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

      {matchedDesktop && <RxNexusDesktop />}
    </>
  );
};

export default RxNexus;
