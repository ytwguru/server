"use strict";

require('dotenv').config({path : "./.env", silent: true});

import Express from "express";
import * as routes from "./routes";
import bodyParser from "body-parser";
import compression from "compression";

const port = process.env.SITE_PORT || 8080;
const app = Express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.use("/contacts", routes.contacts);
app.use("/customers", routes.customers);
app.use("/quotes", routes.quotes);
app.use("/delmardivine", routes.delmardivine);
app.use("/independentyouth", routes.independentyouth);
app.use("/africanchamberstl", routes.africanchamberstl);
app.use("/clarkfoxstl", routes.clarkfoxstl);
app.use("/urise", routes.urise);
app.use("/", routes.default);

app.use(function(err, req, res, next) {
  res.status(err.status || 400);
  res.send({'error' :{
    message: err.message
  }});
});

app.listen(port);