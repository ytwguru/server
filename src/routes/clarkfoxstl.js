require('dotenv').config({silent: true});

import Express from "express";
import mailer from "./../lib/mailer";

let router = Express.Router();
let emailTo = [{
  "email": "allie@clark-fox.com",
  "name": "Allie Cicotte",
  "type": "to"
}];

router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));

function sendMail(req, res, subject){
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
    to: emailTo,
    subject: subject,
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
}

router.post("/contacts", (req, res) => {
  let subject = "New Contact Message from clarkfoxstl.com";
  sendMail(req,res, subject);
});

router.post("/feedback", (req, res) => {
  let subject = "New Feedback from clarkfoxstl.com";
  sendMail(req,res, subject);
});

router.post("/mapping-requests", (req, res) => {
  let subject = "New Mapping Request from clarkfoxstl.com";
  sendMail(req,res, subject);
});

export default router;