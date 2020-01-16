import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

// App resources
import SectionSolutionTag from "./MemberSolutionTagSection.jsx";
import busImage from "assets/member/img/member/acando-selvkjorende_buss2.jpg";
import helseImage from "assets/member/img/member/acando-smart-helse.jpg";

function MemberSolutionSection({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.blog}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem className={`${classes.mlAuto} ${classes.mrAuto}`}>
            <h2 className={classes.title}>Solutions</h2>
            <br />
            <Card plain blog className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablito" onClick={e => e.preventDefault()}>
                      <img src={busImage} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${busImage})`,
                        opacity: "1"
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${busImage})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <Info>
                    <h6 className={classes.cardCategory}>Solution</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>Smart Mobility</h3>
                  <p className={classes.description}>
                    Se for deg en by uten køer, ventetid og overfylte busser. I
                    Acando jobber vi for at dette skal bli en realitet i løpet
                    av noen år. Vi har allerede transportert mer enn 25 000
                    nordmenn i en selvkjørende minibuss en rekke steder rundt i
                    landet. Dette er starten på en transportrevolusjon.
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      {" "}
                      Read More{" "}
                    </a>
                  </p>
                  <p className={classes.author}>
                    by <b>Frode Kjos/Director Smart Transport</b>
                  </p>
                  <SectionSolutionTag />
                </GridItem>
              </GridContainer>
            </Card>

            <Card plain blog className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={7} md={7}>
                  <Info>
                    <h6 className={classes.cardCategory}>Solution</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Smart care = bedre helse
                    </a>
                  </h3>
                  <p className={classes.description1}>
                    "Smart care" omfatter flere anvendelser av både eksisterende
                    og ny teknologi som skal forbedre helse- og omsorgstilbud
                    blant befolkningen. De varme hendene skal bli flere, og
                    deling av helsedata skal bidra til at vi både blir bedre på
                    forebygging og får bedre behandling når sykdommen er et
                    faktum.
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      {" "}
                      Read More{" "}
                    </a>
                  </p>
                  <p className={classes.author}>
                    by <b>Francis D`Silva</b>
                  </p>
                  <SectionSolutionTag />
                </GridItem>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablito" onClick={e => e.preventDefault()}>
                      <img src={helseImage} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${helseImage})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(blogsStyle)(MemberSolutionSection);
