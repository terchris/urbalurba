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
import NavPills from "components/NavPills/NavPills.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";


// App resources
import memberPageStyle from "assets/member/jss/views/memberPageStyle.jsx";
import SDGGrid from "../SharedSection/SDGGrid";
import MemberFooter from "../SharedSection/MemberFooter.jsx";

import MemberTeamSection from "./Sections/MemberTeamSection.jsx";
import MemberHeaderSection from "./Sections/MemberHeaderSection.jsx";
import MemberTagsSection from "./Sections/MemberTagsSection.jsx";
import MemberBlogSection from "./Sections/MemberBlogSection.jsx";
import MemberSolutionSection from "./Sections/MemberSolutionSection.jsx";
import MemberSummarySection from "./Sections/MemberSummarySection.jsx";
import MemberProjectSection from "./Sections/MemberProjectSection.jsx";
import MemberFooterSection from "./Sections/MemberFooterSection.jsx";
import {compose} from "redux";
import { connect } from 'react-redux'
import { getMembers } from '../../../redux/actions/memberActions'

// firebase imports
import fire from "db/fire.js";
const db = fire.firestore();


class MemberProfilePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      organization:[],
      orgLoading:true
    }
  }

   componentDidMount() {
    // this.getSegmentOrChallenge()
    //urlOrg is when an Organisation is searched by writing it straight as part of URL
    const urlOrg = this.props.match.params.urlOrg

    // Check whether user is coming from just short URL with 
    //company name or through the HomePage
    if(urlOrg)
    { 
      this.getSingleOrganization(urlOrg)
    }
    else
    {
      this.setState({
        organization:this.props.location.state.item,
        orgLoading:false
      })
    }

   window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  getSingleOrganization=(urlOrg)=>{
   
    const tempArr=[]
    db.collection("catalog_organisation").where("idName", "==", urlOrg).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            tempArr.push(doc.data())
        });
    }).then(()=>{
      this.setState({
          organization:tempArr[0],
          orgLoading:false
        })
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }


  render() {

    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );

    const member=this.state.organization
   if (this.state.orgLoading===false){ return (
      <div>

       <MemberHeaderSection />
         <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.memberLogo}>
                  <div>
                    <img src={member.image.medium} alt="logo" className={imageClasses} />
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
                <SDGGrid sdg={member.categories.sdg} />
              </GridItem>

              <GridItem xs={12} sm={12} md={2}>
                <MemberTagsSection member={member} />
              </GridItem>
            </GridContainer> 

            {/**Condition for rendering to be put around nav pils.. 
           should only show for acando*/}

             {(member.displayName == "acando" || member.displayName == "Acando") ? <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Summary",
                  tabIcon: Palette,
                  tabContent: (
                    <MemberSummarySection />
                  )
                },
                {
                  tabButton: "Solutions",
                  tabIcon: Palette,
                  tabContent: (
                    <MemberSolutionSection />
                  )
                },
                {
                  tabButton: "Projects",
                  tabIcon: Palette,
                  tabContent: (
                    <MemberProjectSection />
                  )
                },
                {
                  tabButton: "Publications",
                  tabIcon: Palette,
                  tabContent: (
                    <MemberBlogSection />
                  )
                },
                {
                  tabButton: "Datasets",
                  tabIcon: Palette,
                  tabContent: (
                    <MemberBlogSection />
                  )
                }
              ]}
            /> : null}  

            <MemberTeamSection member={member} />
            <MemberFooterSection member={member} />
            <Clearfix />
          </div>
        </div>);
      
            //})}  
            }
        <MemberFooter />
      </div>

    );} else{
      return (
<div>Loading.......</div>
      );
    }
  }
}

//Redux Map actions to change Global state to 
//properties of this Component
const mapDispatchToProps = dispatch => {
  return {
    getMembers: (member) => dispatch(getMembers(member))
  }
}

//Redux Map Global state to 
//properties of this Component
const mapStateToProps = (state, ownProps) => {
  
  console.log("lets see Redux");
   console.log(state.members);
  return {
    members:state.members
  }
}

export default compose(
  withStyles(memberPageStyle),
  connect(mapStateToProps,mapDispatchToProps),
)(MemberProfilePage);