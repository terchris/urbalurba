import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// App resources

import MemberTopMenu from "views/Member/SharedSection/MemberTopMenu.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";



const EntryHeaderSection = props => {
  const { classes,bgImg, title } = props;
  return (
    <div>
      <MemberTopMenu />
      <Parallax image={bgImg} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>{title}</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
</div>

 
  );
};

export default withStyles(landingPageStyle)(EntryHeaderSection);
