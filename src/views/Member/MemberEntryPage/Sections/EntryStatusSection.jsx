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
import StatusCardIcon from "@material-ui/icons/Assignment";
import StatusStartIcon from "@material-ui/icons/Event";
import StatusStopIcon from "@material-ui/icons/Event";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";


// App resources
import entryStatusStyle from "assets/member/jss/views/entryStatusStyle.jsx";

function EntryStatusSection({ ...props }) {
    const { classes, entryStatus, ...rest } = props;

    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
                <Card>

                    <CardBody>                        
                    <h4 className={classes.cardTitle}>Status: {entryStatus.status}</h4>
                        {entryStatus.summary}
                    </CardBody>
                    <CardFooter> 

                            <StatusStartIcon /> Start date: {entryStatus.startDate} <StatusStopIcon /> Finish date: {entryStatus.finishDate}

                    </CardFooter>

                </Card>
            </GridItem>


        </GridContainer>
    );
}

export default withStyles(entryStatusStyle)(EntryStatusSection);
