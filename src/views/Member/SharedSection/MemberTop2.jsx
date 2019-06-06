import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// App resources
import memberHeaderStyle from "assets/member/jss/views/memberHeaderStyle.jsx";
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";
import MemberTopMenu from "views/Member/SharedSection/MemberTopMenu.jsx";
import MemberTypeStat from "views/Member/SharedSection/MemberTypeStat.jsx";


import bgImg from "assets/img/bg12.jpg";



  const headerCornerImageStyle = {
    
    maxWidth: "200px",
    margin: "0 auto",
    display: "inline-block"
  };

  const headerMainImageStyle= {
    maxWidth: "550px", 
    maxHeight: "300px",   
    margin: "0 auto",
    display: "inline-block"
  };



function MemberTop({ ...props }) {
    const { classes, mainImage, cornerImage, displayName, summary, myBAck } = props;

    const XbackgroundColor= {
        height: "80vh",
        background: "#DD1367"
    };
    const myPageHeader =  {
        position: "relative",
        
        maxHeight: "1600px",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center",
        "&:before": {
          background: "rgb(221, 19, 103, 0.5)"
        },
        "&:after,&:before": {
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
          display: "block",
          left: "0",
          top: "0",
          content: "''"
        }
      
    };    
    

    return (
        <div>
            {/* HEADER 1 START */}
            <div>
                <MemberTopMenu />
                <div
                    className={classes.pageHeader} style={XbackgroundColor}>
                    <div className={classes.container}>


                        <GridContainer>
                            <GridItem sm={6} md={6}>
                                <img src={mainImage} style={headerMainImageStyle}/>
                            </GridItem>
                            <GridItem sm={5} md={5}>
                                <GridContainer>
                                    <GridItem sm={6} md={6}>
                                        <h2 className={classes.title}>{displayName}</h2>
                                    </GridItem>
                                    
                                    <GridItem sm={5} md={5}>
                                        <img src={cornerImage} style={headerCornerImageStyle}/>
                                    </GridItem>
                                    
                                </GridContainer>
                                <GridItem sm={12} md={12}>
                                    {summary}
                                </GridItem>

                            </GridItem>
                        </GridContainer>

                    </div>
                </div>
            </div>
            {/* HEADER 1 END */}
        </div>

    );
}

export default withStyles(headersStyle)(MemberTop);
