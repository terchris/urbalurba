import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";

import InfoArea from "components/InfoArea/InfoArea.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.jsx";

const SectionMemberFooter = props => {
    const { classes } = props;
    return (
        <div>
            <div
                className={classNames(
                    classes.subscribeLine,
                    classes.subscribeLineWhite
                )}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem sm={2} md={2} >
                            <img
                                src="http://bucket.urbalurba.com/logo/acando.jpg"
                                width="200"
                                alt="..."
                            />

                        </GridItem>
                        <GridItem md={3} sm={3} className={classes.mlAuto}>
                            <InfoArea
                                className={classes.info}
                                title="Tordenskioldsgate 8-10"
                                description={
                                    <p>
                                        0160 Oslo,
                    <br /> Norway
                  </p>
                                }
                                icon={PinDrop}
                                iconColor="primary"
                            />
                        </GridItem>
                        <GridItem md={2} sm={2} className={classes.mlAuto}>
                            <InfoArea
                                className={classes.info}
                                title="930 01 000"
                                description={<p>Dan Vigeland</p>}
                                icon={Phone}
                                iconColor="primary"
                            />
                        </GridItem>
                        <GridItem md={3} sm={3} className={classes.mlAuto}>
                            <InfoArea
                                className={classes.info}
                                title="www.acando.no"
                                description={<p>.</p>}
                                icon={BusinessCenter}
                                iconColor="primary"
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(SectionMemberFooter);
