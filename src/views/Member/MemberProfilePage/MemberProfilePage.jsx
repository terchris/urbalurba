/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Palette from "@material-ui/icons/Palette";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
//import NavPills from "components/NavPills/NavPills.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";


// App resources
import memberPageStyle from "assets/member/jss/views/memberPageStyle.jsx";
//import SDGGrid from "../SharedSection/SDGGrid";
//import MemberFooter from "../SharedSection/MemberFooter.jsx";

import MemberTeamSection from "./Sections/MemberTeamSection.jsx";
import MemberHeaderSection from "./Sections/MemberHeaderSection.jsx";
//import MemberTagsSection from "./Sections/MemberTagsSection.jsx";
import MemberBlogSection from "./Sections/MemberBlogSection.jsx";
//import MemberSolutionSection from "./Sections/MemberSolutionSection.jsx";
import MemberSummarySection from "./Sections/MemberSummarySection.jsx";
import MemberProjectSection from "./Sections/MemberProjectSection.jsx";
import MemberFooterSection from "./Sections/MemberFooterSection.jsx";



class MemberProfilePage extends React.Component {
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

    const  member  = this.props.location.state.item;
    return (
      <div>

        <MemberHeaderSection  bgImg={member.image.medium}/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.memberLogo}>
                  <div>
                   
                    
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>{member.displayName}</h1>
                    <h3>{member.slogan}</h3>
                  </div>

                </div>
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <div className={classNames(classes.section)}>
                  <p>
                    {member.summary}
                  </p>
                </div>
              </GridItem>
            </GridContainer>
                   
            <Clearfix />
          </div>
    </div>
      
      
      </div>
      
    );
  }
}

export default withStyles(memberPageStyle)(MemberProfilePage);
