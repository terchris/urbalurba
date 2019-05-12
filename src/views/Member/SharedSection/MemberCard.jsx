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

//icontentful
import * as contentful from 'contentful'


const SPACE_ID = 'yynhhoh159d4'
const ACCESS_TOKEN = '0eff50d6ae3fde62f9d4052b2ebb81eeea4c632c15f35eff0d05de63bc3f4fb0'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class MemberCard extends React.Component {



    

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const { members } = this.props;
    
    return (
      <GridItem xs={12} sm={4} md={4}>
        <Card profile>
          <CardHeader image>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              
              <div className={classes.cardTitleAbsolute}>
                {members.displayName}
              </div>
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                
                opacity: "1"
              }}
            />
          </CardHeader>
          <CardBody>
            <Info>
              <h6 className={classes.cardCategory}>{members.slogan}</h6>
            </Info>
            <p className={classes.cardDescription}>
              {members.summary}
            </p>
            <Link to={{
              pathname:"/member-profile",
              state: {
                member: members.summary
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
