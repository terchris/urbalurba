import React from "react";
import List from "@material-ui/core/List";
import ListItemComponenet from "views/Feilmeld/MainPage/Sections/SectionListItem.jsx";


class SectionList extends React.Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <List
                style={{
                    height: "33vh",
                    position: "relative",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    padding: "0",
                    margin: "0"
                }}
            >
                {
                  this.props.entryList.map(entry => {
                    return <ListItemComponenet name={entry.name}/>;
                  })
                }
            </List>
        );
    }
}

export default SectionList;
