import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import overviewStyle from "assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.jsx";

// App resources
import SDGimage from "../SharedSection/SDGimage.jsx";

function SDGGirid({ ...props }) {
  const { classes, sdg, ...rest } = props;

  if (!sdg) {
    return null; //just retur nohing if there is no values to display
  }
  return (
    <div className={classes.ourClients}>
      <GridContainer justify="center">
        {sdg.map(CurrentSDG => (
          <SDGimage sdgNumber={CurrentSDG} />
        ))}
      </GridContainer>
    </div>
  );
}
export default withStyles(overviewStyle)(SDGGirid);
