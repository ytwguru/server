import Express from "express";
import mailer from "./../lib/mailer";

function handleNewQuote(req, res) {
  var request = req.body;
  var message = "Hi Yomi";
  mailer.sendMail({
    from: request.email,
    to: "support@ytadvisors.com",
    subject: "I would like a quote",
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

function handleGetQuote(req, res) {
  res.send('respond with a quote resource. ' + JSON.stringify(process.env));
}

var router = Express.Router();
router.get("/", handleGetQuote);
router.post("/", handleNewQuote);

export default router;