import Express from "express";
import mailer from "./../lib/mailer";
let router = Express.Router();

router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));
router.get("/contacts", (req, res) => res.send({ success : true, message  : "Get request"}));

router.post("/contacts", (req, res) => {
  let body = req.body;
  let content = "";
  for(let key in body){
    if(req.body.hasOwnProperty(key)){
      content += `<p>${key} : ${body[key]}</p>`;
    }
  }

  let to = { email : "", name : "" };
  switch(body.contactType){
    case "admin":
      to = { email : "webmaster@delmardivine.com", name : "Webmaster Delmar Divine" };
      break;
    case "info":
      to = { email : "info@delmardivine.com", name : "Info Delmar Divine" };
      break;
    case "apartment":
      to = { email : "aptleasing@delmardivine.com", name : "Apt Leasing" };
      break;
    case "office":
      to = { email : "officeleasing@delmardivine.com", name : "Office Leasing" };
      break;
    case "retail":
      to = { email : "retailleasing@delmardivine.com", name : "Retail Leasing" };
      break;
  }
  let message = `<html><body>${content}</body></html>`;
  mailer.sendMail({
    from_email: "no-reply@delmardivine.com",
    from_name: body.name,
    to: [{
      "email": to.email,
      "name": to.name,
      "type": "to"
    }],
    subject: "New Contact Message",
    html: message
  }, process.env.DELMARDEVINE_MANDRILL_API_KEY )
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