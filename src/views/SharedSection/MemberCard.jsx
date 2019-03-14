import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Rose from "components/Typography/Rose.jsx";
import Button from "components/CustomButtons/Button.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import christian from "assets/img/faces/christian.jpg";
import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";

const MemberCard = (props) => {
  const { classes } = props;
  console.log(props);
    return (
        <div>
            <GridItem xs={12} sm={4} md={4}>
                <Card profile>
                    <CardHeader image>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img src={props.member.image_display_url} alt="..." />
                        </a>
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${props.member.image_display_url})`,
                                opacity: "1"
                            }}
                        />
                    </CardHeader>
                    <CardBody>
                    <Info>
                    <h6 className={classes.cardCategory}>{props.member.title}</h6>
                    </Info>
                        
                        <h6
                            className={`${classes.cardCategory} ${
                                classes.cardDescription
                                }`}
                        >
                            {props.member.slogan}
                        </h6>
                        <p className={classes.cardDescription}>
                        {props.member.description}
                        </p>
                    </CardBody>
                    <CardFooter>
                        <div className={classes.author}>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              src={christian}
                              alt="..."
                              className={`${classes.imgRaised} ${
                                classes.avatar
                              }`}
                            />
                            <span>Lord Alex</span>
                          </a>
                        </div>
                        <div className={`${classes.stats} ${classes.mlAuto}`}>
                          <Favorite />
                          345 ·
                          <ChatBubble />
                          45
                        </div>
                      </CardFooter>
                </Card>
            </GridItem>



        </div>
    )


}
export default withStyles(styles)(MemberCard);


/*

<GridContainer>

<GridItem xs={12} sm={4} md={4}>
  <Card profile>
    <CardHeader image>
      <a href="#pablo" onClick={e => e.preventDefault()}>
        <img src={cardProfile1} alt="..." />
      </a>
      <div
        className={classes.coloredShadow}
        style={{
          backgroundImage: `url(${cardProfile1})`,
          opacity: "1"
        }}
      />
    </CardHeader>
    <CardBody>
      <h4 className={classes.cardTitle}>Alec Thompson</h4>
      <h6
        className={`${classes.cardCategory} ${
          classes.cardDescription
        }`}
      >
        CEO / CO-FOUNDER
      </h6>
    </CardBody>
    <CardFooter
      profile
      className={classes.justifyContentCenter}
    >
      <Button justIcon round color="twitter">
        <i className="fab fa-twitter" />
      </Button>
      <Button justIcon round color="facebook">
        <i className="fab fa-facebook" />
      </Button>
      <Button justIcon round color="google">
        <i className="fab fa-google" />
      </Button>
    </CardFooter>
  </Card>
</GridItem>


</GridContainer>
*/