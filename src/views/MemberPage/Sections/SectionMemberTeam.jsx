import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

import marc from "assets/img/faces/marc.jpg";

import kendall from "assets/img/faces/kendall.jpg";

function SectionMemberTeam({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={marc} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Frode Kjos</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Director Smart Transport</h6>
                  </Muted>
                  <p className={classes.description}>
                    .
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>

                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="google"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-google" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={kendall} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Dan Vigeland</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Director Smart City</h6>
                  </Muted>
                  <p className={classes.description}>
                    .
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="dribbble"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(teamsStyle)(SectionMemberTeam);
