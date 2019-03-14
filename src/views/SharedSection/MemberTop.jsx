import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";
import MemberTopMenu from "views/SharedSection/MemberTopMenu.jsx";
import MemberTypeStat from "views/SharedSection/MemberTypeStat.jsx";

import bg12 from "assets/img/bg12.jpg";
import office2 from "assets/img/examples/office2.jpg";
import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/dg3.jpg";

function MemberTop({ ...props }) {
    const { classes, ...rest } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <div>

            {/* HEADER 1 START */}
            <div>
                <MemberTopMenu />
                <div
                    className={classes.pageHeader}
                    style={{ backgroundImage: `url("${bg12}")` }}
                >
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={6} md={6}>
                                <h1 className={classes.title}>Smartbykatalogen</h1>
                                <h4>
                                    Norges største nettverk av smartbyentusiaster
                </h4>
                                <br />
                                <Button
                                    color="danger"
                                    size="lg"
                                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                    target="_blank"
                                    rel=""
                                >
                                    <i className="fas fa-ticket-alt" />
                                    Log in
                </Button>
                            </GridItem>
                            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                                <div className={classes.iframeContainer}>
                                    <iframe
                                        height="250"
                                        src="https://www.youtube.com/embed/IN6QnLpVEPI"
                                        frameBorder="0"
                                        allow="encrypted-media"
                                        allowFullScreen=""
                                        title="Tesla"
                                    />
                                </div>
                            </GridItem>
                        </GridContainer>

                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <MemberTypeStat />
                            </GridItem >
                        </GridContainer>
                    </div>
                </div>
                
            </div>
            {/* HEADER 1 END */}
        
        </div>
    );
}

export default withStyles(headersStyle)(MemberTop);
