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

const offlineData=[
  {
    "website": "https://www.acando.no/",
    "organisationTags": "digital strategy, IoT, data analytics, autonomous",
    "categories": {
        "SDG": ["1", "2"],
        "segment": ["mobility", "energy"],
        "BREAM": ["ledelse", "energibruk"],
        "organizationType": ["private"]

    },
    "contacts": [{
        "mobile": "",
        "title": "Director Smart City",
        "email": "",
        "name": "Dan Vigeland"
    },
    {
        "mobile": "",
        "title": "Director Smart Transport",
        "email": "",
        "name": "frode Kjos"
    }
    ],

    "foreignKeys": {
        "ckan_id": "e8d52059-1139-4b58-8169-52314ba56d7a",
        "organizationNumber": "979191138",
        "insightly_id": "95288967"
    },
    "summary": "Acand0 er et konsulentselskap som jobber med digitale transformasjoner i offentlig og private virksomheter. Teknologi er en sentral driver til forandring, men det er brukerens evne og ønske om å ta teknologien i bruk som skaper verdi. Med teknisk spisskompetanse og inngående innsikt i brukeratferd og forretningsutvikling drevet av digitalisering, skaper vi idéer, løsninger og mobiliserer organisasjoner til forandring. Et av våre satsningsområder er Smart City der Intelligente Transportsystemer (ITS) og selvkjørende minibusser i alminnelig trafikkmiljø, er en del av satsningen..",
    "slogan": "Digitalt konsulentselskap",
    "phone": "93001000",
    "idName": "acando",
    "image": {
        "large": "",
        "medium": "http://bucket.urbalurba.com/logo/acando.jpg",
        "small": ""
    },
    "updates": {
        "ckan_org_date_updated_utc": "2019-03-13 08:37:38",
        "insightly_org_date_updated_utc": "2019-03-13 08:37:38"
    },
    "networkMemberships": [
        "SBN",
        "byggalliansen"
    ],
    "location": {
        "shippingAddress": "Tordenskioldsgate 8-10, 0160 Oslo, Norway",
        "gps": {
            "_latitude": 0,
            "_longitude": 0
        }
    },
    "displayName": "Acando"
  },
  {
    "website": "https://www.acando.no/",
    "organisationTags": "digital strategy, IoT, data analytics, autonomous",
    "categories": {
        "SDG": ["1", "2"],
        "segment": ["mobility", "energy"],
        "BREAM": ["ledelse", "energibruk"],
        "organizationType": ["Zebando"]

    },
    "contacts": [{
        "mobile": "",
        "title": "Director Smart City",
        "email": "",
        "name": "Dan Vigeland"
    },
    {
        "mobile": "",
        "title": "Director Smart Transport",
        "email": "",
        "name": "frode Kjos"
    }
    ],

    "foreignKeys": {
        "ckan_id": "e8d52059-1139-4b58-8169-52314ba56d7a",
        "organizationNumber": "979191138",
        "insightly_id": "95288967"
    },
    "summary": "Acand0 er et konsulentselskap som jobber med digitale transformasjoner i offentlig og private virksomheter. Teknologi er en sentral driver til forandring, men det er brukerens evne og ønske om å ta teknologien i bruk som skaper verdi. Med teknisk spisskompetanse og inngående innsikt i brukeratferd og forretningsutvikling drevet av digitalisering, skaper vi idéer, løsninger og mobiliserer organisasjoner til forandring. Et av våre satsningsområder er Smart City der Intelligente Transportsystemer (ITS) og selvkjørende minibusser i alminnelig trafikkmiljø, er en del av satsningen..",
    "slogan": "Digitalt konsulentselskap",
    "phone": "93001000",
    "idName": "Zebando",
    "image": {
        "large": "",
        "medium": "http://bucket.urbalurba.com/logo/acando.jpg",
        "small": ""
    },
    "updates": {
        "ckan_org_date_updated_utc": "2019-03-13 08:37:38",
        "insightly_org_date_updated_utc": "2019-03-13 08:37:38"
    },
    "networkMemberships": [
        "SBN",
        "byggalliansen"
    ],
    "location": {
        "shippingAddress": "Tordenskioldsgate 8-10, 0160 Oslo, Norway",
        "gps": {
            "_latitude": 0,
            "_longitude": 0
        }
    },
    "displayName": "Zebando"
  }
]

class MemberHomePage extends React.Component {

  constructor() {
    super()
    this.state = {
       isLoading:true,
       //OFFLINE MODE
       //members:offlineData,
       orgTypes:[],
       orgs:[],
       searchString: ''
    }
  }

  componentDidMount()
    {
        // ===>contentful version this.getMembers();
      this.getMembersFirebase();
    }

//firebase version 

getMembersFirebase = () => {
  const db = fire.firestore();
  let organization=[];
  let orgArray=[];
  let orgTypeArr=[]
 
  
  db.collection('catalog_organisation').get()
  .then((snapshot) => {       
    snapshot.forEach((doc) => {
      // Ebe. Here is the data. How to get it into the right structure I leave to you 
    
      organization.push(doc.data())
      //Get all organizationType from Firebase Organizations

      //Terje. this would be best if it returned just a string instead of an array,
      // Perhaps we could look into it. I'm not sure how much time that will take
     orgArray.push(doc.data().categories.organizationType)
    
    });

    /**
     * trim OrgArray to get individual orgType values
     */
    let d=0// individual values are always the first index of Orgtype array
    for (let i = 0; i < orgArray.length; i++) { 
      if(orgArray[i])
      {orgTypeArr.push(orgArray[i][d])}
      else{
        console.log("index of currupted Data: ",i)
      }
    }

     this.props.getMembers(organization);
     let orgTypes=new Set(orgTypeArr);
     this.setState({
      isLoading:false,
      orgs:organization,
      orgTypes:[...orgTypes]

    })
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
}


  render() {
    const { classes,members,} = this.props;
   // const {members} =this.state;
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
              {this.state.orgTypes.map(CurrentMember => (
               <MemberCard key={CurrentMember} members={CurrentMember} /> 

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
)(MemberHomePage);
