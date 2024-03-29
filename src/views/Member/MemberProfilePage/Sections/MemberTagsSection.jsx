/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Badge from "components/Badge/Badge.jsx";

// App resources
import memberPageStyle from "assets/member/jss/views/memberPageStyle.jsx";

import { Link } from "react-router-dom";

class MemberTagsSection extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
        const { member: member } = this.props;

        return (
            <GridContainer>
                <GridItem>
                    <h4 className={classes.title}>Tags</h4>
                    {member.categories.tags}
                    <hr />
                    <h4 className={classes.title}>Segment</h4>
                    {member.categories.segment && member.categories.segment.map(CurrentTag => (
                        <Link to={{
                            pathname: "/member-landing",
                            state: {
                                segmentTag: CurrentTag
                            }
                        }}>
                            <Badge
                                color="info">
                                {CurrentTag}
                            </Badge>
                        </Link>
                    ))}


                    <hr />
                    <h4 className={classes.title}>Solving these problems</h4>
                    {member.categories.challenges && member.categories.challenges.map(CurrentTag => (

                        <Link to={{
                            pathname: "/member-landing",
                            state: {
                                challengesTag: CurrentTag
                            }
                        }}>
                            <Badge
                                color="success">
                                {CurrentTag}
                            </Badge>
                        </Link>

                    ))}
                </GridItem>
            </GridContainer>
        );
    }
}
export default withStyles(memberPageStyle)(MemberTagsSection);
