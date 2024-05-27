import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";
import { useMediaQuery } from "@mui/material";

const Title = () => {
  const contactTitle = ContactStyle.contactTitle;
  const contactTitle2 = ContactStyle.contactTitle2;
  const matchsm = useMediaQuery("(min-width: 728px)");
  // const linkStyle = { color: "#6e737d", textDecoration: "none" };
  const linkStyle = ContactStyle.linkStyle;
  const hrSelector = { margin: ".5rem 0" };
  const contactWrapper = ContactStyle.contactWrapper;

  return (
    <>
      <Row>
        <p className={contactTitle}>
          CONTACT US {!matchsm && <br />}
          <span className={contactTitle2}>TODAY</span>
        </p>
        <div className={contactWrapper}>
          E-mail:{" "}
          <a
            className={linkStyle}
            href="mailto:specialtymeds@biomazzecoordination.com"
          >
            specialtymeds@biomazzecoordination.com
          </a>
        </div>
        <hr style={hrSelector} />
        <div className={contactWrapper}>
          Phone:{" "}
          <Link className={linkStyle} to="tel:4693733545">
            469-373-3741
          </Link>
          <br /> Fax:{" "}
          <Link className={linkStyle} to="tel:4693733545">
            469-373-3545
          </Link>
        </div>
      </Row>
    </>
  );
};
export default Title;
