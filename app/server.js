"use strict";
import Express from "express";
import contacts from "./routes/contacts";
import quotes from "./routes/quotes";
import bodyParser from "body-parser";
import compression from "compression";

const port = process.env.SITE_PORT || 3000;
const app = Express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/contacts", contacts);
app.use("/quotes", quotes);

app.listen(port);