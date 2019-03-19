import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
//
// leaflet
import L from "leaflet";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import mapStyle from "feilmeld/jss/views/mainSections/mapStyle.jsx";

class SectionMap extends React.Component {
  componentDidMount() {
    var map = L.map('map', {
      center: [61, 5],
      zoom: 5,
      zoomControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        id="map"
        style={{
          height: "67vh"
        }}
      ></div>
    );
  }
}

export default withStyles(mapStyle)(SectionMap);
