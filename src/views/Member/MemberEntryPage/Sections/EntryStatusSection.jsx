/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


//saker for å legge til card

import StatusStartIcon from "@material-ui/icons/Event";
import StatusStopIcon from "@material-ui/icons/Event";
import TrendingUp from "@material-ui/icons/TrendingUp";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Danger from "components/Typography/Danger.jsx";


import CardFooter from "components/Card/CardFooter.jsx";

// App resources

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

function EntryStatusSection({ ...props }) {
    const { classes, entryStatus, image, title, ...rest } = props;

    return (
        
            <GridItem xs={12} sm={12} md={4}>
                <Card blog >
                    <CardHeader image >
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={image} alt="..." />
                        <div className={classes.cardTitleAbsolute}>
                            {title}
                          </div>
                      </a>                      
                    </CardHeader>
                    <CardBody>
                    <Danger>
                        <h6 className={classes.cardCategory}>
                            <TrendingUp /> Status: {entryStatus.status}
                        </h6>
                    </Danger>      
                    <div className={classes.cardDescription}>
                        {entryStatus.summary}
                    </div>                          
                    </CardBody>
                    <CardFooter>
                        <StatusStartIcon /> Start date: {entryStatus.startDate} <StatusStopIcon /> Finish date: {entryStatus.finishDate}
                    </CardFooter>
                </Card>
            </GridItem>
        
    );
}

export default withStyles(styles)(EntryStatusSection);
