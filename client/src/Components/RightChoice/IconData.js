import contract from "../../assets/mobile/right-choice/contract.png";
import contact from "../../assets/mobile/right-choice/contact.png";
import scripts from "../../assets/mobile/right-choice/prescription.png";
import insurance from "../../assets/mobile/right-choice/insurance.png";
import confirm from "../../assets/mobile/right-choice/confirm.png";
import educate from "../../assets/mobile/right-choice/educate.png";
import dermTreat from "../../assets/mobile/right-choice/derm-treatment.png";
import RheumTreat from "../../assets/mobile/right-choice/rheum-treatment.png";

import RightChoiceStyles from "./RightChoice.module.css";

const widthStyle = RightChoiceStyles.widthStyle;

const iconsData = [
  {
    id: 1,
    className: widthStyle,
    iconTitle: (
      <>
        Contract <br /> with Dr's
      </>
    ),

    src: contract,
  },

  {
    id: 2,
    className: widthStyle,
    iconTitle: (
      <>
        Contact <br /> Patients
      </>
    ),
    src: contact,
  },

  {
    id: 3,
    className: widthStyle,
    iconTitle: (
      <>
        Send <br /> Scripts
      </>
    ),
    src: scripts,
  },

  {
    id: 4,
    className: widthStyle,
    iconTitle: (
      <>
        Handle <br /> Insurance
      </>
    ),
    src: insurance,
  },
  {
    id: 5,
    className: widthStyle,
    iconTitle: (
      <>
        Confirm <br /> Delivery
      </>
    ),
    src: confirm,
  },
  {
    id: 6,
    className: widthStyle,
    iconTitle: (
      <>
        Pharmaceutical
        <br /> Education
      </>
    ),
    src: educate,
  },
  {
    id: 7,
    className: widthStyle,
    iconTitle: (
      <>
        Dermatology
        <br /> Treatment
      </>
    ),
    src: dermTreat,
  },
  {
    id: 8,
    className: widthStyle,
    iconTitle: (
      <>
        Rheumatology
        <br /> Treatment
      </>
    ),
    src: RheumTreat,
  },
];

export default iconsData;
