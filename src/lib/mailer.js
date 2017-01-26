import mandrill from "mandrill-api";

function validateObjectKeys(obj, keys){
  let errors = keys.filter((field) => {
    if (!obj.hasOwnProperty(field)) {
      return field;
    }
  });

  if (errors.length > 0) {
    throw new Error(errors.join(", ") + " : not set");
  }
  return true;
}

export default {
  sendMail : (payload, api_key) => {
    validateObjectKeys(payload, ["from_email", "from_name", "to", "subject", "html"]);
    let message = {
      "html": payload.html,
      "text": payload.html.replace(/(<([^>]+)>)/ig,""),
      "subject": payload.subject,
      "from_email": payload.from_email,
      "from_name": payload.from_name,
      "to": payload.to,
      "headers": {
        "Reply-To": payload.from_email
      }
    };

    return new Promise( (resolve, reject) => {
      if(!api_key)
        reject(new Error("Mandrill API key not set"));
      else {
        let mailer = new mandrill.Mandrill(api_key);
        mailer.messages.send({message: message, async : false}, (result) => {
          resolve(result);
        }, (error) => {
          reject(error);
        });
      }
    });
  }
}