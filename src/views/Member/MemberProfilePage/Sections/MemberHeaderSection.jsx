import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// App resources
import memberHeaderStyle from "assets/member/jss/views/memberHeaderStyle.jsx";
import backgroundImage from "assets/img/examples/city.jpg";
import MemberTopMenu from "views/Member/SharedSection/MemberTopMenu.jsx";

const MemberHeaderSection = props => {
  const { classes } = props;
  return (
    <div>
      <MemberTopMenu />
      <div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className={classes.container} />
      </div>
    </div>
  );
};

export default withStyles(memberHeaderStyle)(MemberHeaderSection);
