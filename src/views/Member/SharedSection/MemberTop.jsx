import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// App resources
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";
import MemberTopMenu from "views/Member/SharedSection/MemberTopMenu.jsx";
import MemberTypeStat from "views/Member/SharedSection/MemberTypeStat.jsx";

import bg12 from "assets/img/bg12.jpg";

function MemberTop({ ...props }) {
   const { classes} = props;

  return (
    <div>
      {/* HEADER 1 START */}
      <div>
        <MemberTopMenu />
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: `url("${bg12}")` }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Smartbykatalogen!!!</h1>
                <h4>Norges største nettverk av smartbyentusiaster</h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel=""
                >
                  <i className="fas fa-ticket-alt" />
                  Log in
                </Button>
              </GridItem>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                <div className={classes.iframeContainer}>
                  <iframe
                    height="250"
                    src="https://www.youtube.com/embed/IN6QnLpVEPI"
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen=""
                    title="Tesla"
                  />
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <MemberTypeStat />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* HEADER 1 END */}
    </div>
  );
}

export default withStyles(headersStyle)(MemberTop);
