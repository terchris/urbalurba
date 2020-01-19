import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

import economicIcon from "@material-ui/icons/EuroSymbol";
import environmentIcon from "@material-ui/icons/LocalFlorist";
import socialIcon from "@material-ui/icons/Face";
import defaultIcon from "@material-ui/icons/Build";

function EntrySustainabilitySection({ ...props }) {
  const { classes, sustainability, ...rest } = props;
  
  
  var localArray = [];

  function changeRecord(record) {
    var localRecord = record;
    switch (localRecord.susType) {
      case "economic":
        localRecord.sustainabilityIcon = economicIcon;
        localRecord.susType = "Økonomi";
        localRecord.iconColor = "info";        
        break;

      case "social":
        localRecord.sustainabilityIcon = socialIcon;
        localRecord.susType = "Sosialt";
        localRecord.iconColor = "rose";        
        break;

      case "environment":
        localRecord.sustainabilityIcon = environmentIcon;
        localRecord.susType = "Miljø";
        localRecord.iconColor = "success";        
        break;    

      default:
        localRecord.sustainabilityIcon = defaultIcon;
        localRecord.iconColor = "info";        
        break;
    }
    return localRecord;
  }
  localArray = sustainability.map(changeRecord);
  return (
    <div className={classes.section}>
      <GridContainer>
        {sustainability && sustainability.map(CurrentValue => (

/*
switch (CurrentValue.susType) {
  case "economic":
                sustainabilityIcon = economicIcon;
                sustainabilityName = "Økonomi";
                break;
              case "social":
                sustainabilityIcon = socialIcon;
                sustainabilityName = "Sosialt";
                break;
              case "environment":
                sustainabilityIcon = environmentIcon;
                sustainabilityName = "Sosialt";
                break;
              case default:
                sustainabilityIcon = defaultIcon;
                sustainabilityName = CurrentValue.type;
                break;
            }
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            title={sustainabilityName}
            description={CurrentValue.summary}
            icon={sustainabilityIcon}
            iconColor="info"
            vertical
          />
        </GridItem>
*/            
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            title={CurrentValue.susType}
            description={CurrentValue.summary}
            icon={CurrentValue.sustainabilityIcon}
            iconColor={CurrentValue.iconColor}
            vertical
          />
        </GridItem>
        ))}

    </GridContainer>
    </div>
  );
}

export default withStyles(productStyle)(EntrySustainabilitySection);
