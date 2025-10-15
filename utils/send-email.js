import {emailTemplates} from "./email-template.js";
import dayjs from "dayjs";
import transporter, {accountEmail} from "../config/nodemailer.js";

const sendReminderEmail = async ({to, type , subscription}) => {

    if (!to || !type) throw new Error("Missing required parameters");

    const template = emailTemplates.find((t) => t.label === type);

    if (!template) throw new Error("Invalid email type");

    const mailInfo = {
        userName: subscription.user.name,
        subscriptionName: subscription.name,
        renewalDate: dayjs(subscription.renewalDate).format("MM-D-YYYY"),
        planName: subscription.name,
        price: `${subscription.currency}$${subscription.price} ${subscription.frequency}`,
        paymentMethod: subscription.paymentMethod,
    }

    const subject = template.generateSubject(mailInfo);
    const body = template.generateBody(mailInfo);

    const mailOptions = {
        from: accountEmail,
        to: to,
        subject: subject,
        html: body,
    }

   transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(`Error sending email ${error}`);

        console.log("Email sent: ", info.response);
    })
}

export default sendReminderEmail;