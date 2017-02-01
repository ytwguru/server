import Express from "express";
import mailer from "./../lib/mailer";
let router = Express.Router();

router.get("/", (req, res) => res.send({ success : true, message  : "Get request"}));
router.get("/contacts", (req, res) => res.send({ success : true, message  : "Get request"}));

router.post("/contacts", (req, res) => {
  let body = req.body;
  let contact = body.contact;
  let content = "";
  let request = [];
  let contactCounter = 0;
  let to = { email : "", name : "" };
  let defaultTo = { email : "webmaster@delmardivine.com", name : "General Information" };

  for(let key in contact){
    if(contact.hasOwnProperty(key)){
      if(contact[key] === "true" || contact[key] === true){
        switch(key){
          case "admin":
            to = { email : "webmaster@delmardivine.com", name : "Webmaster Delmar Divine" };
            break;
          case "info":
            to = defaultTo;
            break;
          case "apartment":
            to = { email : "aptleasing@delmardivine.com", name : "Apartment Leasing" };
            break;
          case "office":
            to = { email : "officeleasing@delmardivine.com", name : "Office Leasing" };
            break;
          case "retail":
            to = { email : "retailleasing@delmardivine.com", name : "Retail Leasing" };
            break;
          case "media":
            to = { email : "maxine@delmardivine.com", name : "Media Inquiries" };
            break;
        }
        request.push(to.name);
      }
    }
  }

  delete body.contact;

  for(let key in body){
    if(req.body.hasOwnProperty(key)){
      content += `<p><strong>${key}</strong> : ${body[key]}</p>`;
    }
  }
  content += "<p><strong>Requesting:</strong> </p>"
  content += `<p>${request.join("</p><p>")}</p>`;

  if(request.length > 1)
    to = defaultTo;

  let message = `<html><body>${content}</body></html>`;
  mailer.sendMail({
    from_email: "no-reply@ytadvisors.com",
    from_name: body.name,
    to: [{
      "email": to.email,
      "name": to.name,
      "type": "to"
    }],
    subject: "New Contact Message From DelmarDivine.com",
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