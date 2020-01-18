import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Muted from "components/Typography/Muted.jsx";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import ValueDateIcon from "@material-ui/icons/Event";
import ValueCardIcon from "@material-ui/icons/TrendingUp";

import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";

function EntryValuesSection({ ...props }) {
  const { classes, values, ...rest } = props;

  return (

    <GridContainer>
      {values && values.map(CurrentValue => (

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success" icon>
              <CardIcon color="success">
                <ValueCardIcon />
              </CardIcon>
              <h4 className={classes.cardTitle}>Value: {CurrentValue.valueType}</h4>
            </CardHeader>
            <CardBody>
              {CurrentValue.summary}
            </CardBody>
            <CardFooter profile className={classes.justifyContent}>
              <ValueDateIcon />
              Oppdatert: {CurrentValue.valueDate}
            </CardFooter>
          </Card>
        </GridItem>
      ))}

    </GridContainer>

  );
}

export default withStyles(teamsStyle)(EntryValuesSection);
