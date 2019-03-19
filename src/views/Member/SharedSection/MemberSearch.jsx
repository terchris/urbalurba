/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import memberPageStyle from "assets/member/jss/views/memberPageStyle.jsx";
import backgroundImage from "assets/img/examples/city.jpg";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

const MemberSearch = props => {
    const { classes } = props;
    return (
        <div>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>

                        <Card raised className={classes.card}>
                            <CardBody className={classes.cardBody}>

                                <GridContainer justify="center">
                                    <GridItem xs={12} sm={6} md={6} lg={8}>
                                        <CustomInput
                                            id="emailPreFooter"
                                            formControlProps={{
                                                fullWidth: true,
                                                className: classes.cardForm
                                            }}
                                            inputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Search />
                                                    </InputAdornment>
                                                ),
                                                placeholder: "Search"
                                            }}
                                        />
                                    </GridItem>

                                </GridContainer>

                            </CardBody>
                        </Card>
                    </GridItem>

                </GridContainer>

            </div>


        </div>

    );

}

export default withStyles(memberPageStyle)(MemberSearch);
