"use strict";

require('expose?$!expose?jQuery!jquery');
require('dotenv').config({path : "./../.env", silent: true});

import Home from "./containers/Home"
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(reducer, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
