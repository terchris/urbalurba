/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Badge from "components/Badge/Badge.jsx";



import memberPageStyle from "assets/jss/material-kit-pro-react/views/memberPageStyle.jsx";


const SectionMemberTags = props => {
    const { classes } = props;
    return (

        <GridContainer>

            <GridItem>
                <h4 className={classes.title}>Member tags</h4>
                <Badge color="primary">digital strategy</Badge>
                <Badge color="primary">IoT</Badge>
                <Badge color="primary">data analytics</Badge>
                <Badge color="primary">autonomous</Badge>
                <hr />
                <h4 className={classes.title}>Segment</h4>
                <Badge color="info">Mobility</Badge>
                <Badge color="info">Telecom and Software</Badge>
                <Badge color="info">Consulting</Badge>
                <hr />
                <h4 className={classes.title}>Solving these problems</h4>

                <Badge color="success">Improving travel safety</Badge>
                <Badge color="success">Improving traffic management</Badge>
                <Badge color="success">Improving parking</Badge>
                <Badge color="success">Promoting sustainable private transport models</Badge>
                <Badge color="success">Reducing use of fossils in public transport</Badge>
                <Badge color="success">Improving public transport accessibility</Badge>

            </GridItem>


        </GridContainer>



    );

}

export default withStyles(memberPageStyle)(SectionMemberTags);
