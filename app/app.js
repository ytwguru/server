"use strict";
require('expose?$!expose?jQuery!jquery');
require('dotenv').config({path : "./../.env", silent: true});

import "./colors.less";
import Home from "./containers/Home"
import React from "react";
import ReactDOM from "react-dom";
import "./assets/fonts/custom-icons/css/custom-icons.css";
import "./assets/fonts/custom-icons/css/custom-icons-ie7.css";


ReactDOM.render(
  <Home>
  </Home>,
  document.getElementById("app")
);
