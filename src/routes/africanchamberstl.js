require('dotenv').config({silent: true});

import Express from "express";
import validator from "validator";
import mailer from "./../lib/mailer";
import Stripe from "stripe";

let router = Express.Router();
let key = process.env.NODE_ENV === "production" ? process.env.ACCSTL_STRIPE_KEY : process.env.ACCSTL_STRIPE_TEST_KEY;
let stripe = Stripe(key);

function sendMail(request){
  let content = "";
  for(let key in request){
    if(request.hasOwnProperty(key)){
      content += `<p>${key} : ${request[key]}</p>`;
    }
  }

  let message = `<html><body>${content}</body></html>`;
  return mailer.sendMail({
    from_email: "no-reply@ytadvisors.com",
    from_name: request.name,
    to: [{
      "email": "africanchamberstl@gmail.com",
      "name": "African Chamber of Commerce STL",
      "type": "to"
    }],
    subject: "New Registered Member",
    html: message
  })
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
      res.send({success: true});
    }
    else {
      throw new Error(charge.failure_message);
    }
  })
  .catch((err) => next(new Error(err.message)));
});

router.post("/contacts", (req, res) => {
  sendMail(req.body)
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