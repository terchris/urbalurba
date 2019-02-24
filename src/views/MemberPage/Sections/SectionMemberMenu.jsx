import React from "react";
// nodejs library that concatenates classes

// react component for creating beautiful carousel

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

function SectionHeaders({ ...props }) {
  const { classes } = props;

  return (
    <Header
      absolute
      brand="Urbalurba"
      color="transparent"
      links={
        <div className={classes.collapse}>
          <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Button
                href="/home"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Home
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                About us
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Products
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Contact us
              </Button>
            </ListItem>
          </List>
          <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Button
                color="transparent"
                href="https://twitter.com/CreativeTim"
                target="_blank"
                className={`${classes.navLink} ${classes.navLinkJustIcon}`}
              >
                <i className={"fab fa-twitter"} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                color="transparent"
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
                className={`${classes.navLink} ${classes.navLinkJustIcon}`}
              >
                <i className={"fab fa-facebook"} />
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                color="transparent"
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
                className={`${classes.navLink} ${classes.navLinkJustIcon}`}
              >
                <i className={"fab fa-instagram"} />
              </Button>
            </ListItem>
          </List>
        </div>
      }
    />
  );
}

export default withStyles(headersStyle)(SectionHeaders);
