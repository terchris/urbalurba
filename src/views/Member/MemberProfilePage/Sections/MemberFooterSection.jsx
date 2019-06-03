import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.jsx";

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";

class MemberFooterSection extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const { member } = this.props;

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
              <GridItem sm={2} md={2}>
                <img src={member.image.medium} width="200" alt="logo" />
              </GridItem>
              <GridItem md={3} sm={3} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title={member.location.shippingAddress}
                  icon={PinDrop}
                  iconColor="primary"
                />
              </GridItem>
              <GridItem md={2} sm={2} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title={member.phone}
                  icon={Phone}
                  iconColor="primary"
                />
              </GridItem>
              <GridItem md={3} sm={3} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title={member.website}
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
  }
}
export default withStyles(styles)(MemberFooterSection);
