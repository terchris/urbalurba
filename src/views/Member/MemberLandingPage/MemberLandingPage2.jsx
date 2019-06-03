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
import MemberGrid2 from "views/Member/SharedSection/MemberGrid2.jsx";


class MemberLandingPage2 extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
    render() {
       console.log("Ora ci Siamo Shaba!!!")
   console.log(this.props.location.state.item)

    const orgType =this.props.location.state.item;
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        return (
            <div>
                <MemberTop />
                <MemberGrid2 organization={orgType}/>
                <MemberFooter />
            </div>
        );
    }
}

export default withStyles(memberPageStyle)(MemberLandingPage2);
