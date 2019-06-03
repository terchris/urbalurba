/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";

// App resources
import memberPageStyle from "assets/member/jss/views/memberPageStyle.jsx";
import MemberCard from "views/Member/SharedSection/MemberCard.jsx";
import { compose } from "redux";
import { connect } from 'react-redux'
import { getMembers } from '../../../redux/actions/memberActions'

// firebase imports
import fire from "db/fire.js";
const db = fire.firestore();




class MemberGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      searchString: '',
      members: this.props.members,
      organs: [],
      orgsDisplayed: [],
      filterItem: this.props.organization,
      segmentTag: this.props.segmentTag
      //searched
    }
  }
  componentDidMount() {
    let segmentTag = this.state.segmentTag
    if (segmentTag) {
      this.getSegmentOrChallenge(segmentTag)
    }
    else {
      this.getOrgs()
    }
    //this.getArraySeg()

  }

  // get all possible segments{
  //   going through each org and getting all elements in segment array

  getArraySeg = () => {

    let org = this.state.members
    let segArr = [];
    let segSet = new Set();
    for (let n = 0; n < org.length; n++) {

      if (org[n].categories.segment) {
        segArr.push(...org[n].categories.segment)
      }
    }

    segSet = new Set(segArr)
    let segToMap = [...segSet].map(
      segment => {
        let colornumber = Math.floor((Math.random() * 100000) + 100000);
        return (
          <span onClick={this.getSegment} style={{ backgroundColor: "#" + colornumber }}>{segment}</span>
        );
      }
    )

    return segToMap
  }
  // final segment should be a set of all segment types available

  getSegment = (event) => {
    let members = this.state.organs;
    let segment = event.target.textContent
    let segmentOrgs = members.filter((org) => {

      if (org.categories.segment) {
        return org.categories.segment.includes(segment)
      }
    })

    this.setState({
      orgsDisplayed: segmentOrgs,
      isLoading: false,
    })
    // this.props.getFilteredOrgs(orgtype)
  }

  getSegmentOrChallenge = (check) => {
    //coolection where
    const tempArr = []
    console.log("From Challenge")
    db.collection("catalog_organisation").get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {

          if (doc.data().categories.segment) {
            let arr = doc.data().categories.segment
            if (arr.includes(check)) {
              tempArr.push(doc.data())
            }
            else { console.log("Niente") }
          }

          else { console.log("No Segment For", doc.data().displayName) }
        });

      }).then(() => {
        this.setState({
          isLoading: false,
          orgsDisplayed: tempArr,

        })
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  getOrgs = () => {
    let members = this.state.members;
    let orgType = this.state.filterItem
    let filteredOrg = members.filter((org) => {

      if (org.categories.organizationType) {
        return org.categories.organizationType[0] === orgType
      }
    })

    this.setState({
      organs: filteredOrg,
      isLoading: false,
      orgsDisplayed: filteredOrg,

    })
    // this.props.getFilteredOrgs(orgtype)

  }

  render() {
    const { classes, members, } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    if (!this.state.isLoading) {
      return (<div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.title}>
              <h3>Member search</h3>
              <div className="segments">

                {this.getArraySeg()}
              </div>
            </div>
            <GridContainer>
              {this.state.orgsDisplayed.map(CurrentMember => (
                <MemberCard key={CurrentMember.displayName} orgMembers={"orgtypeCheck"} members={CurrentMember} />

              ))}
            </GridContainer>
          </div>
        </div>
      </div>);
    }
    else {
      return (
        <div>........Loading</div>
      );
    }

  }
}



//**************REDUX CONNECTION */
//Redux Map actions to change Global state to Properties of this Component
const mapDispatchToProps = dispatch => {
  //const { members } = this.props.location.state;
  return {
    //getMembers: (member) => dispatch(getMembers(member)),
    // getFilteredOrgs: (orgType) => dispatch(getFilteredOrgs(orgType))
  }
}

//Redux Map Global state to Properties of this Component
const mapStateToProps = (state, ownProps) => {

  // console.log("lets see");
  // console.log(state.members);
  return {
    members: state.members
  }
}

export default compose(
  withStyles(memberPageStyle),
  connect(mapStateToProps, mapDispatchToProps),
)(MemberGrid);
