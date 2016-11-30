import Express from "express";
import mailer from "./../lib/mailer";
let router = Express.Router();

router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));

router.post("/", (req, res) => {
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
      "email": "support@ytadvisors.com",
      "name": "YT Advisors Support",
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