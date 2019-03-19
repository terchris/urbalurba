import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
/*
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
*/
// sections for this page
import SectionHeader from "views/Feilmeld/MainPage/Sections/SectionHeader.jsx";
import SectionMap from "views/Feilmeld/MainPage/Sections/SectionMap.jsx";
import SectionList from "views/Feilmeld/MainPage/Sections/SectionList.jsx";
import SectionFab from "views/Feilmeld/MainPage/Sections/SectionFab.jsx";

import mainStyle from "feilmeld/jss/views/mainStyle.jsx";

class MainPage extends React.Component {
  componentDidMount() {
    //this.entryList = fetchEntries();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <SectionHeader />
        <SectionMap />
        <SectionList
          entryList={[
            {name: "test1"},
            {name: "test2"},
            {name: "test3"},
            {name: "test4"},
            {name: "test5"},
            {name: "test6"}
          ]}
        />
        <SectionFab />
      </div>
    );
  }
}

export default withStyles(mainStyle)(MainPage);
