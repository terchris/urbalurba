/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components

// App resources
import memberPageStyle from "assets/member/jss/views/memberPageStyle.jsx";
import MemberFooter from "views/Member/SharedSection/MemberFooter.jsx";
import MemberTop from "views/Member/SharedSection/MemberTop.jsx";
import MemberGrid from "views/Member/SharedSection/MemberGrid.jsx";

//image for background
import bgImgOriginal from "assets/img/bg12.jpg";


class MemberLandingPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
    render() {
        console.log("Ora ci Siamo Shaba!!!")
        // console.log(this.props.location.state.item)

        let orgType = ""
        let segmentTag = ""
        let sdgTag = ""
        let challengesTag = ""
        let backgroundImage;
        let orgTypeName;

        /**
         * Check to make sure which User case is being used 
         * e.g user uses member-profile directly
         */

        if (this.props.location.state) {
            orgType = this.props.location.state.item;
            segmentTag = this.props.location.state.segmentTag;
            sdgTag = this.props.location.state.sdgTag;
            challengesTag = this.props.location.state.challengesTag;
            
            //choose image source as well as orgtype string source
            if(this.props.location.state.item)
            {
                
                 backgroundImage= orgType.images
                orgTypeName = orgType.name
            }
            else{
                backgroundImage=bgImgOriginal
                orgTypeName=""
            }
        }
        
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
            <div>
                <MemberTop bgImg={backgroundImage} />
                <MemberGrid organization={orgTypeName} segmentTag={segmentTag} challengesTag={challengesTag} sdgTag={sdgTag} />
                <MemberFooter />
            </div>
        );
    }
}

export default withStyles(memberPageStyle)(MemberLandingPage);

