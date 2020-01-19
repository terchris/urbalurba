/* eslint-disable */
import React from "react";
import ReactMarkdown from 'react-markdown';

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
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import SDGGrid from "../SharedSection/SDGGrid";
import MemberFooter from "../SharedSection/MemberFooter.jsx";

import EntryContactsSection from "./Sections/EntryContactsSection.jsx";
import MemberHeaderSection from "./Sections/MemberHeaderSection.jsx";
import EntryHeaderSection from "./Sections/EntryHeaderSection.jsx";
import EntryCategoriesSection from "./Sections/EntryCategoriesSection.jsx";
import EntryStatusSection from "./Sections/EntryStatusSection.jsx";
import EntryResourcesSection from "./Sections/EntryResourcesSection.jsx";

import EntryValuesSection from "./Sections/EntryValuesSection.jsx";
import EntrySustainabilitySection from "./Sections/EntrySustainabilitySection.jsx";


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


class MemberEntryPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      entry:[],
      orgLoading:true
    }
  }

   componentDidMount() {
    // this.getSegmentOrChallenge()
    //urlEntry is when an Organisation is searched by writing it straight as part of URL
    const nourlEntry = this.props.location.state
    console.log("What is this, ",nourlEntry)
    const urlEntry = this.props.match.params.urlEntry
   

    // Check whether user is coming from just short URL with 
    //company name or through the HomePage
    if(nourlEntry)
    {console.log(" No URL User case")
      this.setState({
        
        entry:this.props.location.state.item,
        orgLoading:false
      })
    }
    else{ 
      console.log("URL User case")
      this.getSingleEntry(urlEntry)
    }
  
   window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  getSingleEntry=(urlEntry)=>{
   
    const tempArr=[]
    db.collection("catalog_entry").where("idName", "==", urlEntry).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            tempArr.push(doc.data())
        });
    }).then(()=>{
      this.setState({
          entry:tempArr[0],
          orgLoading:false
        })
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }


  render() {
    console.log("Entry")
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );

    const entry=this.state.entry
   if (this.state.orgLoading===false){ return (
      <div>

        <EntryHeaderSection bgImg={entry.image.medium} title={entry.displayName}/>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classNames(classes.section)}>

              <GridContainer justify="center">
                <GridItem xs={12} sm={8} md={8}>
                  <h2 className={classes.title}>{entry.slogan}</h2>
                  <h5 className={classes.description}>
                    {entry.summary}
                  </h5>
                </GridItem>
              </GridContainer>
              <EntrySustainabilitySection sustainability={entry.sustainability} />    

              <GridContainer>
                <GridItem xs={12} sm={12} md={10}>

                  <SDGGrid sdg={entry.categories.SDG} />
                  <div className={classNames(classes.section)}>
                    <p>
                    <ReactMarkdown source={entry.description} />
                    </p>
                  </div>           
                  <EntryValuesSection values={entry.values} />      
                  <GridContainer>
                    <EntryStatusSection entryStatus={entry.entryStatus} image={entry.image.medium} title={entry.displayName} />                                                   
                    <EntryResourcesSection entryStatus={entry.entryStatus} image={entry.image.medium} title={entry.displayName} />        
                  </GridContainer>
                </GridItem>

                <GridItem xs={12} sm={12} md={2}>
                  <EntryCategoriesSection categories={entry.categories} /> 
                </GridItem>
              </GridContainer> 
              <EntryContactsSection contacts={entry.contacts} />     
              <MemberFooterSection member={entry.parent} /> 
              <Clearfix />
            </div>
          </div>
      
        </div>
        <MemberFooter />
      </div>

    );} 
    else{
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
    getEntries: (entry) => dispatch(getEntries(entry))
  }
}

//Redux Map Global state to 
//properties of this Component
const mapStateToProps = (state, ownProps) => {
  
  // console.log("lets see Redux");
  //  console.log(state.entrys);
  return {
    entries:state.entries
  }
}

export default compose(
  withStyles(memberPageStyle),
  connect(mapStateToProps,mapDispatchToProps),
)(MemberEntryPage);


       
