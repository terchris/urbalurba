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

import cardBlog4 from "assets/img/member/sbn-hurtigruten.png";

import SectionSolutionTag from "views/MemberPage/Sections/SectionSolutionTag.jsx";

function SectionMemberBlogs({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.blog}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem className={`${classes.mlAuto} ${classes.mrAuto}`}>
            <h2 className={classes.title}>Publications</h2>
            <br />
            <Card plain blog className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <CardHeader image plain>
                    <a href="#pablito" onClick={e => e.preventDefault()}>
                      <img src={cardBlog4} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardBlog4})`,
                        opacity: "1"
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardBlog4})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={8} md={8}>
                  <Info>
                    <h6 className={classes.cardCategory}>Publication</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    Hurtigruten lesefolder 2018
                  </h3>
                  <p className={classes.description}>
                    Acando er initiativtaker til å bringe de selvkjørende
                    minibussene til Norge. Frem til i dag har vi gjennomført 17
                    demonstratorprosjekter i Karlstad, Kongsberg, Gjøvik,
                    Fornebu, Stavanger, Trondheim, Ringerike, Sarpsborg, Hamar,
                    Bergen, Horten og Oslo. For flere av prosjektene planlegges
                    igangsetting av operative pilotruter i 2017/2018. Acando er
                    tjenesteintegrator, og vi tilbyr busser, risikoanalyser,
                    kontrollrom, operatører, komplette løsninger gjennom
                    partnere. Acando bidrar med rådgivning og innsikt, digital
                    transformasjon, prosjektledelse og utvikler teknologistøtte
                    for sømløs transport og publikumstjenester. Acando er aktiv
                    pådriver og deltakere i ulike nasjonale og internasjonale
                    samarbeidsfora, og arbeider i hele spennet fra
                    teknologileverandører til regulerende myndigheter og
                    forsknings-miljøer. Vi deltar aktivt i faglige nettverk med
                    relevante partnere som ITS Norway, NHO og Electric Mobility
                    Norway og sentrale bransjeaktører innen transport og
                    mobilitet. Vi følger nøye teknologiutviklingen i Norge og
                    globalt, og har svært god oversikt over – og samarbeider
                    ofte med - relevante lokale teknologileverandører, både
                    nyoppstartede og etablerte
                  </p>
                  <p className={classes.author}>
                    by{" "}
                    <b>
                      Dan Vigeland/Director Smart City og Frode Kjos/Director
                      Smart Transport
                    </b>
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

export default withStyles(blogsStyle)(SectionMemberBlogs);
