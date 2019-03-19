import {
  title,
  description,
  mrAuto,
  mlAuto
} from "assets/jss/material-kit-pro-react.jsx"
import customSelectStyle from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";

const contactStyle = {
  title,
  mrAuto,
  mlAuto,
  ...customSelectStyle,
  description: {
    ...description,
    marginBottom: "70px"
  },
  textCenter: {
    textAlign: "center!important"
  },
  selectUnderlineRoot: {
    "& > div": {
      marginTop: "13px"
    }
  }
};

export default contactStyle;
