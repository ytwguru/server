import nodemailer from "nodemailer";
import Q from "q";

export default {
  _transport : null,
  getSmtpConfig : function(){
    this.validateObjectKeys(process.env, ["SUPPORT_EMAIL", "SUPPORT_PASSWD"]);
    return {
      host : "smtp.gmail.com",
      port : 465,
      secure : true,
      auth : {
        user : process.env.SUPPORT_EMAIL,
        pass : process.env.SUPPORT_PASSWD
      }
    };
  },
  getTransport : function(){
    if (!this._transport)
      this._transport = nodemailer.createTransport(this.getSmtpConfig());

    return this._transport;
  },
  sendMail : function(payload){
    this.validateObjectKeys(payload, ["from", "to", "subject", "html"]);

    var transporter = this.getTransport(),
      deferred = Q.defer();

    transporter.sendMail(payload, function(error, info){
      if(error){
        deferred.reject(error);
      } else {
        deferred.resolve(info);
      }
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