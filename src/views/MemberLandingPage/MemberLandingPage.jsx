/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";

import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import memberPageStyle from "assets/jss/material-kit-pro-react/views/memberPageStyle.jsx";
import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.jsx";
import SDGGrid from "views/SDGGrid/SDGGrid.jsx";
import SDGRow from "views/SDGRow/SDGRow.jsx";
import SectionMemberTeam from "views/MemberPage/Sections/SectionMemberTeam.jsx";

import SectionMemberHeader from "views/MemberPage/Sections/SectionMemberHeader.jsx";
import SectionMemberTags from "views/MemberPage/Sections/SectionMemberTags.jsx";
import SectionMemberBlog from "views/MemberPage/Sections/SectionMemberBlog.jsx";
import SectionMemberSolution from "views/MemberPage/Sections/SectionMemberSolution.jsx";
import SectionMemberSummary from "views/MemberPage/Sections/SectionMemberSummary.jsx";
import SectionMemberProject from "views/MemberPage/Sections/SectionMemberProject.jsx";
import MemberFooter from "views/SharedSection/MemberFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import office2 from "assets/img/examples/office2.jpg";

import MemberTopMenu from "views/SharedSection/MemberTopMenu.jsx";
import MemberSearch from "views/SharedSection/MemberSearch.jsx";
import MemberTop from "views/SharedSection/MemberTop.jsx";
import MemberTypeSum from "views/SharedSection/MemberTypeSum.jsx";
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";
import MemberGrid from "views/SharedSection/MemberGrid.jsx";




class MemberLanding extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
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
                <MemberTop />

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <MemberSearch />


                        <MemberGrid />
                        <Clearfix />
                    </div>
                </div>
                <MemberFooter />
            </div>

        );
    }
}

export default withStyles(headersStyle)(MemberLanding);