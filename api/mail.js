const nodemailer = require("nodemailer");
const { Merci } = require("./merci_template");

const getEmailData = (to, template) => {
    let data = null;

    switch (template) {
        case "Hello" :
            data = {
                from : "Victor Greiveldinger <portfoliov2.victorgreiveldinger@gmail.com>",
                to,
                subject : `Bonjour`,
                html: Hello()
            };
            break;
        case "Merci" : 
            data= {
                from : "Victor Greiveldinger <portfoliov2.victorgreiveldinger@gmail.com>",
                to,
                subject : `Merci !`,
                html: Merci()
            };
            break;
            default : 
                data;
    }
    return data;
};

const sendEmail = (to, type) => {

    const smtpTransport = nodemailer.createTransport({
        service: "Gmail",
    });

    const mail = getEmailData(to, type);

    smtpTransport.sendMail(mail, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(" le mail est bien parti");
        };

        smtpTransport.close();
    });
};

module.exports = {sendEmail};