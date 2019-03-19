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
    const { member } = this.props;
    
    return (
      <GridItem xs={12} sm={4} md={4}>
        <Card profile>
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={member.image_display_url} alt="logo" />
              <div className={classes.cardTitleAbsolute}>
              {member.title}
                          </div>
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${member.image_display_url})`,
                opacity: "1"
              }}
            />
          </CardHeader>
          <CardBody>
            <Info>
              <h6 className={classes.cardCategory}>{member.slogan}</h6>
            </Info>
            <p className={classes.cardDescription}>
              {member.description}
            </p>
            <Link to={{
              pathname:"/member-profile",
              state: {
                member: this.props.member
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



/*
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
      <GridItem xs={12} sm={4} md={4}>
        <Card profile>
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={cardProfile4} alt="..." />
              <div className={classes.cardTitleAbsolute}>
                Tania Andrew
                          </div>
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${cardProfile4})`,
                opacity: "1"
              }}
            />
          </CardHeader>
          <CardBody>
            <Info>
              <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
            </Info>
            <p className={classes.cardDescription}>
              Don't be scared of the truth because we need to
              restart the human foundation in truth And I love you
              like Kanye loves Kanye I love Rick Owens’ bed design
              but the back is...
                        </p>
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


      <GridItem xs={12} sm={4} md={4}>
        <Card profile>
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={cardProfile4} alt="..." />
              <div className={classes.cardTitleAbsolute}>
                Tania Andrew
                          </div>
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${cardProfile4})`,
                opacity: "1"
              }}
            />
          </CardHeader>
          <CardBody>
            <Info>
              <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
            </Info>
            <p className={classes.cardDescription}>
              Don't be scared of the truth because we need to
              restart the human foundation in truth And I love you
              like Kanye loves Kanye I love Rick Owens’ bed design
              but the back is...
                        </p>
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
      <GridItem xs={12} sm={4} md={4}>
        <Card profile>
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={cardProfile4} alt="..." />
              <div className={classes.cardTitleAbsolute}>
                Tania Andrew
                          </div>
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${cardProfile4})`,
                opacity: "1"
              }}
            />
          </CardHeader>
          <CardBody>
            <Info>
              <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
            </Info>
            <p className={classes.cardDescription}>
              Don't be scared of the truth because we need to
              restart the human foundation in truth And I love you
              like Kanye loves Kanye I love Rick Owens’ bed design
              but the back is...
                        </p>
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


*/