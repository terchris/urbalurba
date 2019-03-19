import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Fab from "@material-ui/core/Fab";
// @material-ui/icons components
import AddIcon from "@material-ui/icons/Add";

import fabStyle from "feilmeld/jss/views/mainSections/fabStyle.jsx";

class SectionFab extends React.Component {
  componentDidMount() {
    //
  }

  render() {
    const { classes } = this.props;
    return (
      <Fab
        color="primary"
        aria-label="Meld inn"
        style={{
          position: "absolute",
          bottom: "25px",
          right: "25px"
        }}
      >
        <AddIcon />
      </Fab>
    );
  }
}

export default withStyles(fabStyle)(SectionFab);
