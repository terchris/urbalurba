import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

import busBeachImage from "assets/img/member/acando-fornebu-buss-obos.jpg";

import SectionSolutionTag from "views/MemberPage/Sections/SectionSolutionTag.jsx";

function SectionMemberProjects({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.blog}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem className={`${classes.mlAuto} ${classes.mrAuto}`}>
            <h2 className={classes.title}>Smart City projects</h2>
            <br />
            <Card plain blog className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablito" onClick={e => e.preventDefault()}>
                      <img src={busBeachImage} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${busBeachImage})`,
                        opacity: "1"
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${busBeachImage})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <Info>
                    <h6 className={classes.cardCategory}>Project</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>Selvkjørende buss til stranden</h3>
                  <p className={classes.description}>
                  Bussene frakter badegjester i skytteltrafikk fra mandag 18. juni og alle dager mellom kl. 10 og 18 i hele sommer. Turen starter ved torget utenfor Fornebu S, i forlengelsen av 31-bussen fra Oslo, og går ut mot Storøyodden badeplass og tilbake.
Alle kan bruke bussen helt gratis.

Acando er prosjektleder, mens OBOS er prosjekteier
Acando er prosjektleder i dette prosjektet, og bistår i alle fasene; fra å definere tjenestetilbud, søke om tillatelse hos Vegdirektoratet, inngå avtale med leverandør av busstjenester og på denne måten å tilrettelegge for gjennomføring av piloten. Acando har omfattende kunnskap om digitaliseringen av samferdselssektoren, og har gjennom demonstratorer ervervet betydelig erfaring på hvordan selvkjørende teknologi bør implementeres og benyttes.
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
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(blogsStyle)(SectionMemberProjects);
