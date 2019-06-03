/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { Link } from "react-router-dom";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Info from "components/Typography/Info.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// App resources
import memberPageStyle from "assets/member/jss/views/memberPageStyle.jsx";

class MemberCard extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const { members, orgMembers, orgType, orgCount, image } = this.props;
    return (
      <GridItem xs={12} sm={4} md={4}>
        <Card profile>
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={image} alt="logo" />
              <div className={classes.cardTitleAbsolute}>
                {(orgMembers) ? members.displayName : orgCount + " Of " + orgType}
              </div>
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${image})`,
                opacity: "1"
              }}
            />
          </CardHeader>
          <CardBody>
            <Info>
              <h6 className={classes.cardCategory}>{(orgMembers) ? members.slogan : orgType}</h6>
            </Info>
            <p className={classes.cardDescription}>
              {(orgMembers) ? members.summary : orgType}
            </p>
            <Link to={{
              pathname: (orgMembers) ? `/org/${members.idName}` : "/member-landing",
              state: {
                item: (orgMembers) ? members : orgType
              }
            }}>
              <Button
                color="rose"
                target="_blank"
                className={classes.navButton}
                round
              >
                se member
                  </Button>
            </Link>
          </CardBody>
          <CardFooter
            profile
            className={classes.justifyContentCenter}
          >
            <Button justIcon simple color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button justIcon simple color="dribbble">
              <i className="fab fa-dribbble" />
            </Button>
            <Button justIcon simple color="instagram">
              <i className="fab fa-instagram" />
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    );
  }


}
export default withStyles(memberPageStyle)(MemberCard);