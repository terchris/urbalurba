//
import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowUp from '@material-ui/icons/ArrowUpward';
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core";


class ListItemComponenet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
    }
    // state = {
    //     checked: false,
    // }

    handleClick = () => {
        this.setState({checked: (!this.state.checked)});
    }

    render() {
        const {name} = this.props;
        return(
            <div>
                <ListItem button={true} alignItems="flex-start" onClick={this.handleClick}>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary="seondary text easpsonfdkl"
                    />
                    <ListItemSecondaryAction>
                        <IconButton>
                            <ArrowUp />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Collapse in={this.state.checked}>
                    <Card>
                        <CardContent>
                            <Typography>
                                Expanded
                            </Typography>
                            <CardMedia
                                image=""
                                title="test"
                            />
                            <Typography variant="subtitle1"> {/* subtitle 1 */}
                                {"Melding om hva som problemet er for den personen som meldte inn"}
                            </Typography>
                            <Typography variant="caption"> {/* caption */}
                                {"xx.xx.xxxx xx:xx"}
                            </Typography>
                            <Typography variant="subtitle1">{/* subtitle 1 */}
                                {"Tag1, Tag2, Tag3 ..."}
                            </Typography>
                            <Typography variant="subtitle1"> {/* subtitle 1 */}
                                {"Status"}
                            </Typography>
                        </CardContent>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default ListItemComponenet;
