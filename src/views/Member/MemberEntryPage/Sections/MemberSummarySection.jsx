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
import busBeachImage from "assets/member/img/member/acando-fornebu-buss-obos.jpg";
import hurtigrutenImage from "assets/member/img/member/sbn-hurtigruten.png";

function MemberSummarySection({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.blog}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem className={`${classes.mlAuto} ${classes.mrAuto}`}>
            <h2 className={classes.title}>Summary</h2>
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
                  <h3 className={classes.cardTitle}>
                    Selvkjørende buss til stranden
                  </h3>
                  <p className={classes.description}>
                    Bussene frakter badegjester i skytteltrafikk fra mandag 18.
                    juni og alle dager mellom kl. 10 og 18 i hele sommer. Turen
                    starter ved torget utenfor Fornebu S, i forlengelsen av
                    31-bussen fra Oslo, og går ut mot Storøyodden badeplass og
                    tilbake. Alle kan bruke bussen helt gratis. Acando er
                    prosjektleder, mens OBOS er prosjekteier Acando er
                    prosjektleder i dette prosjektet, og bistår i alle fasene;
                    fra å definere tjenestetilbud, søke om tillatelse hos
                    Vegdirektoratet, inngå avtale med leverandør av
                    busstjenester og på denne måten å tilrettelegge for
                    gjennomføring av piloten. Acando har omfattende kunnskap om
                    digitaliseringen av samferdselssektoren, og har gjennom
                    demonstratorer ervervet betydelig erfaring på hvordan
                    selvkjørende teknologi bør implementeres og benyttes.
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
                <GridItem xs={12} sm={4} md={4}>
                  <CardHeader image plain>
                    <a href="#pablito" onClick={e => e.preventDefault()}>
                      <img src={hurtigrutenImage} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${hurtigrutenImage})`,
                        opacity: "1"
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${hurtigrutenImage})`,
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

export default withStyles(blogsStyle)(MemberSummarySection);
