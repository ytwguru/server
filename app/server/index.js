"use strict";

import Express from "express";
import contacts from "./api/contacts";
import quotes from "./api/quotes";
import bodyParser from "body-parser";

const port = process.env.SITE_PORT || 3000;
const app = Express();

app.set("view engine", "html");
app.set("views", "client");
app.use(Express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",  function(req, res){
  res.render("client/index.html");
});

app.get("/features",  function(req, res){
  res.render("client/features.html");
});

app.get("/blog",  function(req, res){
  res.render("client/blog.html");
});

app.use("/api/contacts", contacts);
app.use("/api/quotes", quotes);

app.listen(port);