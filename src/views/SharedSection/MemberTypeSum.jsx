import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class MemberTypeSum extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Card raised className={classes.card}>
          <CardBody className={classes.cardBody}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={4} md={1}>
                <InfoArea
                  title="180"
                  description="Medlemmer"
                  icon={Fingerprint}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={1}>
                <InfoArea
                  title="27"
                  description="Kommuner"
                  icon={Chat}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={1}>
                <InfoArea
                  title="138"
                  description="Næringsliv"
                  icon={VerifiedUser}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={1}>
                <InfoArea
                  title="2"
                  description="Statlige"
                  icon={Fingerprint}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={1}>
                <InfoArea
                  title="4"
                  description="Foreninger"
                  icon={Fingerprint}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={1}>
                <InfoArea
                  title="4"
                  description="NGO"
                  icon={Fingerprint}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={1}>
                <InfoArea
                  title="2"
                  description="Akademia"
                  icon={Fingerprint}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={1}>
                <InfoArea
                  title="3"
                  description="Forskning"
                  icon={Fingerprint}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(productStyle)(MemberTypeSum);
