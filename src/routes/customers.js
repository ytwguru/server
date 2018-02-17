require('dotenv').config({silent: true});

import Express from "express";
import validator from "validator";
import Stripe from "stripe";

let router = Express.Router();
let key = process.env.NODE_ENV === "production" ? process.env.STRIPE_KEY : process.env.STRIPE_TEST_KEY;
let stripe = Stripe(key);

router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));

router.post("/", (req, res, next) => {
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
      res.send({success: true})
    }
    else {
      throw new Error(charge.failure_message);
    }
  })
  .catch((err) => next(new Error(err.message)));
});

export default router;