import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx";

// images array used in rendering a function for this section
//import imgs from "assets/img/assets-for-demo/sections/imgs.jsx";
import imgs from "assets/memberlogo/logos.jsx";

class MemberGrid extends React.Component {
  renderContainerFluid(cssClass) {
    return imgs.map(row => {
      return (
        <GridContainer key={row[0]}>
          {row.map((el, index) => {
            return (
              <GridItem
                md={3}
                sm={3}
                xs={12}
                key={`${el}_${index}`}
                className={cssClass}
              >
                <img
                  src={require(`assets/memberlogo/${el}.jpg`)}
                  alt={el}
                  key={el[index]}
                />
              </GridItem>
            );
          })}
        </GridContainer>
      );
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sectionSections}>
        <div className={classes.containerFluid}>
          {this.renderContainerFluid(classes.photoGallery)}
        </div>
      </div>
    );
  }
}

export default withStyles(sectionsStyle)(MemberGrid);
