/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";

import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import memberPageStyle from "assets/jss/material-kit-pro-react/views/memberPageStyle.jsx";
import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.jsx";
import SDGGrid from "views/SDGGrid/SDGGrid.jsx";
import SDGRow from "views/SDGRow/SDGRow.jsx";
import SectionMemberTeam from "views/MemberPage/Sections/SectionMemberTeam.jsx";
import SectionMemberFooter from "views/MemberPage/Sections/SectionMemberFooter.jsx";
import SectionMemberHeader from "views/MemberPage/Sections/SectionMemberHeader.jsx";
import SectionMemberTags from "views/MemberPage/Sections/SectionMemberTags.jsx";
import SectionMemberBlog from "views/MemberPage/Sections/SectionMemberBlog.jsx";
import SectionMemberSolution from "views/MemberPage/Sections/SectionMemberSolution.jsx";

import MemberFooter from "views/MemberFooter/MemberFooter.jsx";

class MemberPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>

        <SectionMemberHeader />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.memberLogo}>
                  <div>
                    <img src="http://bucket.urbalurba.com/logo/acando.jpg" alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>Acando</h1>
                    <h3>Digitalt konsulentselskap</h3>
                  </div>

                </div>
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <div className={classNames(classes.section)}>
                  <p>
                    Acando er et konsulentselskap som jobber med digitale transformasjoner i offentlig og private virksomheter. Teknologi er en sentral driver til forandring, men det er brukerens evne og ønske om å ta teknologien i bruk som skaper verdi. Med teknisk spisskompetanse og inngående innsikt i brukeratferd og forretningsutvikling drevet av digitalisering, skaper vi idéer, løsninger og mobiliserer organisasjoner til forandring. Et av våre satsningsområder er Smart City der Intelligente Transportsystemer (ITS) og selvkjørende minibusser i alminnelig trafikkmiljø, er en del av satsningen..{" "}
                  </p>
                </div>

                <SDGGrid />

              </GridItem>

              <GridItem xs={12} sm={12} md={2}>

                <SectionMemberTags />

              </GridItem>
            </GridContainer>

            <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Summary",
                    tabIcon: Palette,
                    tabContent: (
                      <div>
                      <SectionMemberSolution />
                      <SectionMemberBlog />                      
                      </div>
                    )
                  },
                  {
                    tabButton: "Solutions",
                    tabIcon: Palette,
                    tabContent: (
                      <SectionMemberSolution />
                    )
                  },
                  {
                    tabButton: "Publications",
                    tabIcon: Palette,
                    tabContent: (
                      <SectionMemberBlog />
                    )
                  },
                  {
                    tabButton: "Datasets",
                    tabIcon: Palette,
                    tabContent: (
                      <SectionMemberBlog />
                    )
                  }
                ]}
              />                  



            <SectionMemberTeam />
            <SectionMemberFooter />
            <Clearfix />
          </div>
        </div>

        <MemberFooter />
      </div>
    );
  }
}

export default withStyles(memberPageStyle)(MemberPage);
