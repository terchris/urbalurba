/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components

import Footer from "components/Footer/Footer.jsx";



import memberPageStyle from "assets/jss/material-kit-pro-react/views/memberPageStyle.jsx";

const MemberFooter = props => {
    const { classes } = props;
    return (
        <div>


        
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://urbalurba.no"
                      className={classes.block}
                    >
                      Urbalurba
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="https://www.linkedin.com/in/terchris/">Terje</a> for a
                better web.
              </div>
            </div>
          }
        />



      </div>
    );
  
}

export default withStyles(memberPageStyle)(MemberFooter);
