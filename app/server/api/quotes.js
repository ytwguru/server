import Express from "express";
import mailer from "./../lib/mailer";

function handleNewQuote(req, res) {
  var request = req.body;
  var content = "";
  for(let key in req.body){
    if(req.body.hasOwnProperty(key)){
      content += `<p>${key} : ${req.body[key]}</p>`;
    }
  }
  
  var message = `<html><body>${content}</body></html>`;
  mailer.sendMail({
    from_email: request.email,
    from_name: request.name,
    to: [{
      "email": "support@ytadvisors.com",
      "name": "YT Advisors Support",
      "type": "to"
    }],
    subject: "New Quote Message",
    html: message
  })
    .then(function () {
      res.send({success: message});
    })
    .catch(function (error) {
      res.send({
        success: false,
        error_description: error.message
      });
    });
}

function handleGetQuote(req, res) {
  res.send('respond with a quote resource. ' + JSON.stringify(process.env));
}

var router = Express.Router();
router.get("/", handleGetQuote);
router.post("/", handleNewQuote);

export default router;