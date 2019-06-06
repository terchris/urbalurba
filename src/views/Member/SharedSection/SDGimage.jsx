import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import overviewStyle from "assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.jsx";

class SDGimage extends React.Component {
  render() {
    const { classes } = this.props;
    const { sdgNumber } = this.props;

    let sdgURL = "http://bucket.urbalurba.com/cat/sdg/sdg-logo-3.png";
    let sdgAlt = "none";

    if (sdgNumber != null) {
      sdgURL = "http://bucket.urbalurba.com/cat/sdg/sdg-logo-" + sdgNumber + ".png";
      sdgAlt = "SDG number " + sdgNumber;
    }

    return (
      <GridItem md={2} sm={2}>
        <img src={sdgURL} alt={sdgAlt} />
      </GridItem>
    );
  }
}

export default withStyles(overviewStyle)(SDGimage);
