const twilio = require("twilio");

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSms = async (to, message) => {
    return client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to
    });
};

module.exports = { sendSms };
