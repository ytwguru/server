"use strict";
require('dotenv').config({path : "./../.env", silent: true});

import Express from "express";

const port = process.env.SITE_PORT || 3000;
const app = Express();

app.set("view engine", "html");
app.set("views", "client");
app.use(Express.static('client'));

app.get("/",  function(req, res){
  res.render("index.html");
});

console.log("Listening to => ", port );
app.listen(port);