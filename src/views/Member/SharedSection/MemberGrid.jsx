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
import {compose} from "redux";
import { connect } from 'react-redux'
import { getMembers } from '../../../redux/actions/memberActions'

// firebase imports
import fire from "db/fire.js";




class MemberGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
       isLoading:true,
        searchString: '',
        members:this.props.members,
        organs:[]
    }
  } 
componentDidMount(){
  this.getOrgs()
}

  getOrgs=()=>{
    let members = this.state.members;
    let orgType = this.props.organization
    let filteredOrg=members.filter((org)=>{

           if (org.categories.organizationType) {
          return  org.categories.organizationType[0]===orgType}
          })
   
    this.setState({
        organs:filteredOrg,
        isLoading:false,

    })
   // this.props.getFilteredOrgs(orgtype)
  }


  render() {
    const { classes,members,} = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
    
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);


   
      if (!this.state.isLoading){ return (<div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.title}>
              <h3>Member search</h3>
            </div>
            <GridContainer>
              {this.state.organs.map(CurrentMember => (
               <MemberCard key={CurrentMember.displayName} orgMembers={"orgtypeCheck"} members={CurrentMember} /> 

              ))}
            </GridContainer>
          </div>
        </div>
      </div>);}
      else{
        return (
<div>Loading</div>
        );
      }
    
  }
}

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
    members:state.members
  }
}

export default compose(
  withStyles(memberPageStyle),
  connect(mapStateToProps,mapDispatchToProps),
)(MemberGrid);
