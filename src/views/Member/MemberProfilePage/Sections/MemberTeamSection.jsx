import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

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



function MemberTeamSection({ ...props }) {
  const { classes, member, ...rest } = props;

  return (
    <div className="cd-section" {...rest}>
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            {member.contacts && member.contacts.map(CurrentContact => (

              <GridItem xs={12} sm={3} md={3}>
                <Card profile plain>
                  <CardAvatar profile plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={CurrentContact.picture} alt="picture" className={classes.img} />
                    </a>
                  </CardAvatar>
                  <CardBody>
                    <h4 className={classes.cardTitle}>{CurrentContact.name}</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>
                        {CurrentContact.title}
                      </h6>
                    </Muted>
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
                      <i className="fas fa-phone" />
                    </Button>
                    <Button
                      href="#pablo"
                      justIcon
                      simple
                      color="twitter"
                      className={classes.btn}
                      onClick={e => e.preventDefault()}
                    >
                      <i className="far fa-envelope" />
                    </Button>

                    <Button
                      href={CurrentContact.twitter}
                      justIcon
                      simple
                      color="twitter"
                      className={classes.btn}
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      href={CurrentContact.linkedin}
                      justIcon
                      simple
                      color="linkedin"
                      className={classes.btn}
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button
                      href={CurrentContact.facebook}
                      justIcon
                      simple
                      color="facebook"
                      className={classes.btn}
                      target="_blank"
                    >
                      <i className="fab fa-facebook" />
                    </Button>

                  </CardFooter>
                </Card>
              </GridItem>
            ))}

          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(teamsStyle)(MemberTeamSection);
