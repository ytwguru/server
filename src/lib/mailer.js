import mandrill from "mandrill-api";

export default {
  _mailer : null,
  getMailer : () => {
    if(!this._mailer)
      this._mailer = new mandrill.Mandrill(process.env.MANDRILL_API_KEY);
    return this._mailer;
  },
  sendMail : (payload) => {
    this.validateObjectKeys(payload, ["from_email", "from_name", "to", "subject", "html"]);
    var message = {
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

    var mailer = this.getMailer();
    
    return new Promise( (resolve, reject) => {
      mailer.messages.send({message: message, async : false}, (result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  },

  validateObjectKeys : (obj, keys) => {
    var errors = keys.filter((field) => {
      if (!obj.hasOwnProperty(field)) {
        return field;
      }
    });

    if (errors.length > 0) {
      throw new Error(errors.join(", ") + " : not set");
    }

    return true;
  }

}