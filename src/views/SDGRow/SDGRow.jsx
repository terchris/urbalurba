import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import overviewStyle from "assets/jss/material-kit-pro-react/views/SDGRowStyle.jsx";

class SDGRow extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sdgRow}>
        <GridContainer justify="flex-end">
          <GridItem md={2} sm={2}>
            <img src="http://bucket.urbalurba.com/sdg/sdg-icon-3.png" alt="no 1" />
          </GridItem>
          <GridItem md={2} sm={2}>
            <img src="http://bucket.urbalurba.com/sdg/sdg-icon-11.png" alt="no 2" />
          </GridItem>
          <GridItem md={2} sm={2}>
            <img src="http://bucket.urbalurba.com/sdg/sdg-icon-17.png" alt="no 17" />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(overviewStyle)(SDGRow);
