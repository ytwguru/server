require('dotenv').config({silent: true});

import Express from "express";
import validator from "validator";
import mailer from "./../lib/mailer";
import Stripe from "stripe";

const models = require("./../models");
//const sales = models.sales;

let router = Express.Router();
let key = process.env.NODE_ENV === "production" ? process.env.ACCSTL_STRIPE_KEY : process.env.ACCSTL_STRIPE_TEST_KEY;
let stripe = Stripe(key);

function getSalesData(charge, request){
  return {
    stripeId: charge.id,
    stripeCustomerId: charge.customer,
    amount:  charge.amount,
    product: request.product,
    email:  request.email,
    card: charge.source.id,
    ref: request.ref
  };
}

router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));

router.post("/customers", (req, res, next) => {
  let request = req.body;

  if(!request.email || !validator.isEmail(request.email))
    return next(new Error("Invalid email format"));

  if(!request.id)
    return next(new Error("No token was sent to the server."));

  if(!request.amount)
    return next(new Error("No amount was sent to the server"));

  stripe.customers.create({
    source : request.id,
    email : request.email
  })
  .then((customer) => stripe.charges.create({
    amount: request.amount, // Amount in cents
    currency: "usd",
    receipt_email : request.email,
    statement_descriptor : request.product,
    description : `${request.product}`,
    metadata : { ref : request.ref },
    customer: customer.id
  }))
  .then((charge) => {
    if(charge.paid){
      return true;
      let salesData = getSalesData(charge, request);
      return sales.findOrCreate({
        where: { stripeId: salesData.stripeId},
        defaults: salesData
      });
    }
    else {
      throw new Error(charge.failure_message);
    }
  })
  .then(() => res.send({success: true}))
  .catch((err) => next(new Error(err.message)));
});

router.post("/contacts", (req, res) => {
  let request = req.body;
  let content = "";
  for(let key in req.body){
    if(req.body.hasOwnProperty(key)){
      content += `<p>${key} : ${req.body[key]}</p>`;
    }
  }

  let message = `<html><body>${content}</body></html>`;
  mailer.sendMail({
    from_email: "no-reply@ytadvisors.com",
    from_name: request.name,
    to: [{
      "email": "africanchamberstl@gmail.com",
      "name": "African Chamber of Commerce STL",
      "type": "to"
    }],
    subject: "New Contact Message",
    html: message
  })
    .then(function () {
      res.send({success: true});
    })
    .catch(function (error) {
      res.send({
        success: false,
        error_description: error.message
      });
    });
});

export default router;