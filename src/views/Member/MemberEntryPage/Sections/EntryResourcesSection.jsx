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

import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// App resources

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/tabsStyle.jsx";

function EntryResourcesSection({ ...props }) {
    const { classes, entryStatus, image, title, ...rest } = props;

    return (

        <GridItem xs={12} sm={8} md={8}>
            <h3>
                <small>Ressurser</small>
            </h3>
            <CustomTabs
                headerColor="primary"
                tabs={[
                    {
                        tabName: "Presse",
                        tabContent: (
                         <div>
                            <Card>
                                <CardBody>
                                    <div className={classes.cardDescription}>
                                        Fergetilbudet skal opprettholdes og videreutvikles. Det legges inn investeringsmidler til ny ferge i 2021 og foretas nye vurderinger i forbindelse med handlingsplanen i desember.
                                    </div>                          
                                </CardBody>
                            </Card>
                            
                            <Card>
                                <CardBody>
                                    <div className={classes.cardDescription}>
                                        Samling av bilder av fergen hos google. Lett å finne mange bilder
                                    </div>                          
                                </CardBody>
                            </Card>
                            </div>     
                        )
                    },
                    {
                        tabName: "Bilder",
                        tabContent: (
                            <p className={classes.textCenter}>
                                I think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that
                                things could be at. I will be the leader of a company
                                that ends up being worth billions of dollars, because
                                I got the answers. I understand culture. I am the
                                nucleus. I think that’s a responsibility that I have,
                                to push possibilities, to show people, this is the
                                level that things could be at.
                </p>
                        )
                    },
                    {
                        tabName: "Dokumentasjon",
                        tabContent: (
                            <p className={classes.textCenter}>
                                think that’s a responsibility that I have, to push
                                possibilities, to show people, this is the level that
                                things could be at. So when you get something that has
                                the name Kanye West on it, it’s supposed to be pushing
                                the furthest possibilities. I will be the leader of a
                                company that ends up being worth billions of dollars,
                                because I got the answers. I understand culture. I am
                                the nucleus.
                </p>
                        )
                    }
                ]}
            />
        </GridItem>

    );
}

export default withStyles(styles)(EntryResourcesSection);
