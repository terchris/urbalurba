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
//changed to ver 2: import MemberCard from "views/Member/SharedSection/MemberCard.jsx";
import CategoryCard2 from "views/Member/SharedSection/CategoryCard2.jsx";
import MemberFooter from "views/Member/SharedSection/MemberFooter.jsx";
import MemberTop from "views/Member/SharedSection/MemberTop2.jsx";
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

class MemberHomePage2 extends React.Component {

  constructor() {
    super()
    this.state = {
       isLoading:true,
       //OFFLINE MODE
       //members:offlineData,
       orgTypes:[],
       orgs:[],
       searchString: '',
       image:""
    }
  }

  componentDidMount()
    {
        // ===>contentful version this.getMembers();
      this.getMembersFirebase();
      this.getCategoriesFirebase();
    }

//firebase call for All Organizations 
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
      if(doc.data().categories.organizationType){
        orgArray.push(doc.data().categories.organizationType)
      }
     
    
    });
    
    // send organizations to Global State(Redux)
    this.props.getMembers(organization);
    /**
     *********OLD WAY OF GETTING ORGTYPES********************* trim OrgArray to get individual orgType values
     */
    // let d=0// individual values are always the first index of Orgtype array
    // for (let i = 0; i < orgArray.length; i++) { 
    //   if(orgArray[i])
    //   {orgTypeArr.push(orgArray[i][d])}
    //   else{
    //     console.log("index of currupted Data: ",i)
    //   }
    // }
     //let orgTypes=new Set(orgTypeArr);

    let orgTypes=this.getCatCount(orgArray);

     this.setState({
      isLoading:false,
      orgs:organization,
      orgTypes:orgTypes

    })
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
}

//firebase call for All Categories 
getCategoriesFirebase = () => {
  const db = fire.firestore();
  let categories=[];
  let orgArray=[];
  let orgTypeArr=[]
 
  
  db.collection('catalog_category').get()
  .then((snapshot) => {       
    snapshot.forEach((doc) => {
      // Ebe. Here is the data. How to get it into the right structure I leave to you 
    
      categories.push(doc.data())
     });
     console.log("All Cazz")
     console.log(categories[4].categoryItems[0].image.medium)
     this.setState({
       image:categories[4].categoryItems[0].image.medium
     })

    // // send organizations to Global State(Redux)
    // this.props.getMembers(categories);

    // let orgTypes=this.getCatCount(orgArray);

    //  this.setState({
    //   isLoading:false,
    //   orgs:organization,
    //   orgTypes:orgTypes

    // })
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
}

// get OrgType and total count for a particular orgtype
getCatCount=(orgTypeArray)=>{
  
  let orgToLoop = orgTypeArray;

  let tempOrgType=""// temporary org type
  let tempCount=0// temporary count

  let orgType;
  let orgTypeCount =[];
  let notFiltered=true
   
    //filter Arr based on this orgtype, count all those ==="this orgtype ", 
    //return this filtered array as new array to be looped
    while(notFiltered){

      if(orgToLoop.length>1){   

        // assign orgtype to temp
          tempOrgType=orgToLoop[0][0]
          tempCount=0
          orgType={ name:"", count:0};

          const newLoop=orgToLoop.filter(organtype=>
          {
                  if(organtype[0]!==tempOrgType){
                    return organtype
                  }
                  else{
                    //console.log("Count Happening")
                    tempCount=tempCount+1;
                  }
            })
            
          orgType.name=tempOrgType
          orgType.count=tempCount

          orgTypeCount.push(orgType)
      
          orgToLoop=newLoop
            
      } else{
        
        notFiltered=false
      }


    }
    

  return orgTypeCount
}
  render() {
    const { classes,} = this.props;
   // const {members} =this.state;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
    const navImageClasses = classNames(
      classes.imgRounded, classes.imgGallery);

      if (!this.state.isLoading){ return (<div>
        <MemberTop />
        <div className={classNames(
          classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.title}>
              <h3>Member search</h3>
            </div>
            <GridContainer>
              {this.state.orgTypes.map(CurrentMember => (
               <CategoryCard2 
               image={this.state.image}
               key={CurrentMember.name} 
               orgCount={CurrentMember.count} 
               orgType={CurrentMember.name} /> 

              ))}
            </GridContainer>
          </div>
        </div>
        
        <MemberFooter />
      </div>);}
      else{
        return (
<div>Loading</div>
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
  
  console.log("lets see");
   console.log(state.members);
  return {
    members:state.members
  }
}

export default compose(
  withStyles(memberPageStyle),
  connect(mapStateToProps,mapDispatchToProps),
)(MemberHomePage2);
