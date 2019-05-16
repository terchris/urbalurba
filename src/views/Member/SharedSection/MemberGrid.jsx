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
        members:this.prop.members
    }
  }

  componentDidMount()
    {
        // contentful version this.getMembers();
      //this.getMembersFirebase();
    }

//firebase version 

getMembersFirebase = () => {
  const db = fire.firestore();
  const memArr=[];
  
  db.collection('catalog_organisation').get()
  .then((snapshot) => {       
    snapshot.forEach((doc) => {
      // Ebe. Here is the data. How to get it into the right structure I leave to you 
      console.log( doc.data() );
      memArr.push(doc.data())

    });
     this.props.getMembers(memArr);
     this.setState({
      isLoading:false
    })
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });



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
              {this.state.members.map(CurrentMember => (
               <MemberCard key={CurrentMember.displayName} members={CurrentMember} /> 

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
  return {
    getMembers: (member) => dispatch(getMembers(member))
  }
}

//Redux Map Global state to Properties of this Component
const mapStateToProps = (state, ownProps) => {
  
  console.log("lets see");
   console.log(state.members);
  return {
    members:state.members
  }
}

export default compose(
  withStyles(memberPageStyle),
  connect(mapStateToProps,mapDispatchToProps),
)(MemberGrid);
