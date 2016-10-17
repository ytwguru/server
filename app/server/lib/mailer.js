import mandrill from "mandrill-api";
import Q from "q";

export default {
  _mailer : null,
  getMailer : function(){
    if(!this._mailer)
      this._mailer = new mandrill.Mandrill(process.env.MANDRILL_API_KEY);
    return this._mailer;
  },
  sendMail : function (payload){
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

    var mailer = this.getMailer(),
      deferred = Q.defer();

    mailer.messages.send({message: message, async : false}, function(result){
      deferred.resolve(result);
    }, function(error){
      deferred.reject(error);
    });

    return deferred.promise;
  },
  validateObjectKeys : function(obj, keys){
    var errors = keys.filter(function (field) {
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