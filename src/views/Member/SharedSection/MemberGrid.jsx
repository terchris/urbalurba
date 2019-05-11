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


//icontentful
import * as contentful from 'contentful'


const SPACE_ID = 'yynhhoh159d4'
const ACCESS_TOKEN = '0eff50d6ae3fde62f9d4052b2ebb81eeea4c632c15f35eff0d05de63bc3f4fb0'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})


// firebase imports
import fire from "db/fire.js";




class MemberGrid extends React.Component {


  constructor() {
    super()
    this.state = {
        members: [],
        member: ["",""],
        searchString: ''
    }
  }

  componentDidMount()
    {
        // contentful version this.getMembers();
      this.getMembersFirebase();
    }

//firebase version 

getMembersFirebase = () => {
  const db = fire.firestore();
  const memArr=[];
  
  db.collection('catalog_organisation').get()
  .then((snapshot) => {       
    snapshot.forEach((doc) => {
      console.log( doc.data() );
      memArr.push(doc.data())
      // Ebe. Here is the data. How to get it into the right structure I leave to you
    
    });
    // console.log("lets see")
    //     console.log(snapshot)
    this.setState({
      members:memArr
    })
    this.props.getMembers(memArr);
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });



}


// contentful version     
getMembers = () => {
        client.getEntries({
            content_type: 'organization',
            query: this.state.searchString
        })
        .then((response) => {
          console.log("Before something")
            this.setState({members: response.items })

            console.log("EWe have something")

            console.log(this.state.members)
        })
        .catch((error) => {
            console.log("Error occured while fetching data")
            console.log(error)
        })
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
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.title}>
              <h3>Member search</h3>
            </div>
            <GridContainer>
              {this.state.members.map(CurrentMember => (
               <MemberCard  members={CurrentMember} /> 

              ))}
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMembers: (member) => dispatch(getMembers(member))
  }
}

const mapStateToProps = (state, ownProps) => {
  
  console.log("lets see");
   console.log(state);
  return {
  }
}

export default compose(
  withStyles(memberPageStyle),
  connect(mapStateToProps,mapDispatchToProps),
)(MemberGrid);
