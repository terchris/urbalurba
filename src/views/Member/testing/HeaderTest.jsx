/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";

import MemberTop from "views/Member/SharedSection/MemberTop2.jsx";

let mainImage = "http://bucket.urbalurba.com/cat/sdg/sdg-logo-large.png";
let cornerImage = "http://bucket.urbalurba.com/cat/sdg/sdg-logo-medium.png"; 
let displayName = "Sustainable Development Goals";
let summary = "FNs bærekraftsmål er verdens felles arbeidsplan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030" 
let textColor="";
let myBAck= "";

mainImage = "http://bucket.urbalurba.com/cat/sdg/sdg-logo-10.png";
displayName = "Mindre ulikhet";
summary = "Redusere ulikhet i og mellom land" 
textColor="";
myBAck= "#DD1367";

function HeaderTest({ ...props }) {
    const { classes} = props;
    return (

        <MemberTop mainImage={mainImage} cornerImage={cornerImage} displayName={displayName} summary={summary} myBAck={myBAck} />


    );

}

export default withStyles(withStyles)(HeaderTest);
