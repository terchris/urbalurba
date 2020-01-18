

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle";


const entryStatusStyle = {
    ...dashboardStyle,
    ...loginPageStyle,
    cardTitle: {
        marginTop: "0",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

export default entryStatusStyle;