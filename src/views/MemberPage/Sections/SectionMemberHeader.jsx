import React from "react";
// nodejs library that concatenates classes

// react component for creating beautiful carousel

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components

import memberHeaderStyle from "assets/jss/material-kit-pro-react/views/memberHeaderStyle.jsx";

import backgroundImage from "assets/img/examples/city.jpg";
import SectionMemberMenu from "views/MemberPage/Sections/SectionMemberMenu.jsx";

const SectionHeaders = props => {
  const { classes } = props;
  return (
    <div>
      <SectionMemberMenu />
      <div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className={classes.container} />
      </div>
    </div>
  );
};

export default withStyles(memberHeaderStyle)(SectionHeaders);
