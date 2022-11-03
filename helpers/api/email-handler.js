import nodemailer from 'nodemailer';
import getConfig from 'next/config';

export { sendEmail };

const { serverRuntimeConfig } = getConfig();

const client = nodemailer.createTransport({
    host: serverRuntimeConfig.smtp.host,
    port: serverRuntimeConfig.smtp.port,
    auth: {
        user: serverRuntimeConfig.smtp.username,
        pass: serverRuntimeConfig.smtp.password
    }
});

function sendEmail(subject, body, attachments = []) {
    return client.sendMail({
        from: serverRuntimeConfig.postulation.fromEmail,
        to: serverRuntimeConfig.postulation.toEmail,
        subject: subject,
        html: body,
        attachments: attachments
    });
}