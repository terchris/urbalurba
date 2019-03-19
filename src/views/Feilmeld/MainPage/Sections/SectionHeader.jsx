import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Header from "components/Header/Header.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import headerStyle from "feilmeld/jss/views/mainSections/headerStyle.jsx";

class SectionHeader extends React.Component {
  componentDidMount() {
    //
  }

  render() {
    const { classes } = this.props;
    return (
      <Header
        brand="FeilMeld"
        links={<HeaderLinks dropdownHoverColor="info" />}
        color="dark"
        fixed
        style={{
          backgroundColor: "#000000",
          opacity: 0.5
        }}
      />
    );
  }
}

export default withStyles(headerStyle)(SectionHeader);
