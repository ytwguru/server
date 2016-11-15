"use strict";
import Express from "express";
import contacts from "./api/contacts";
import quotes from "./api/quotes";
import bodyParser from "body-parser";
import compression from "compression";

const port = process.env.SITE_PORT || 3000;
const app = Express();


app.set("view engine", "ejs");
app.set("views",  __dirname + "/../dist");
app.use(compression());
app.use(Express.static( __dirname + '/../dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",  function(req, res){
  res.render(__dirname + "/../dist/index.html");
});

app.use("/api/contacts", contacts);
app.use("/api/quotes", quotes);

app.listen(port);