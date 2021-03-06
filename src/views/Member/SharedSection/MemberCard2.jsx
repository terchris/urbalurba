/**
 * For displaying one members card
 * 
 */
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

class MemberCard2 extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const { member} = this.props;
    let image = member.image.medium;
    return (
      <GridItem xs={12} sm={4} md={4}>
        <Card profile>
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={image} alt="{member.displayName}" />
              <div className={classes.cardTitleAbsolute}>
              {member.displayName}
            </div>
            </a>

          </CardHeader>
          <CardBody>
            <Info>
              <h6 className={classes.cardCategory}>{member.slogan}</h6>
            </Info>

          </CardBody>
          <CardFooter
            profile
            className={classes.justifyContentCenter}
          >
                          <Link to={{
              pathname: "/member-landing2",
            }}>
              <Button
                color="rose"
                target="_blank"
                className={classes.navButton}
                round
              >
                Member profile
                  </Button>
            </Link>

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
export default withStyles(memberPageStyle)(MemberCard2);