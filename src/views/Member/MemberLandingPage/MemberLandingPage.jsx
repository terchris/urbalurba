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

        /**
         * Check to make sure which User case is being used 
         * e.g user uses member-profile directly
         */

        if (this.props.location.state) {
            orgType = this.props.location.state.item;
            segmentTag = this.props.location.state.segmentTag;
            sdgTag = this.props.location.state.sdgTag;
            challengesTag = this.props.location.state.challengesTag;
        }
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
            <div>
                <MemberTop bgImg={orgType.images} />
                <MemberGrid organization={orgType.name} segmentTag={segmentTag} challengesTag={challengesTag} sdgTag={sdgTag} />
                <MemberFooter />
            </div>
        );
    }
}

export default withStyles(memberPageStyle)(MemberLandingPage);

