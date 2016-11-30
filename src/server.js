"use strict";

require('dotenv').config({path : "./.env", silent: true});

import Express from "express";
import * as routes from "./routes";
import bodyParser from "body-parser";
import compression from "compression";

const port = process.env.SITE_PORT || 3000;
const app = Express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

app.use("/contacts", routes.contacts);
app.use("/quotes", routes.quotes);
app.use("/", routes.default);

app.listen(port);