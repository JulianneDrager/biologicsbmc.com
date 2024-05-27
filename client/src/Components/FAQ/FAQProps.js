import React from "react";
import Check from "../../assets/mobile/in-office/arrow.png";

// this is the iterable component that will display the properties given to it

const FAQProps = (props) => {
  // const mainContainer = ContentStyles.mainContainer;

  return (
    <>
      <div className={props.divClassName}>
        <br />
        <h4>{props.question}</h4>
        <span>{props.answer}</span>
      </div>
    </>
  );
};

export default FAQProps;
