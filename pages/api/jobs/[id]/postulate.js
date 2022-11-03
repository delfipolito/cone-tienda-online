import { apiHandler, sendEmail, parseForm } from 'helpers/api';
import Job from '../../../../models/job'

export default apiHandler({
    post: postulate
});

export const config = {
    api: {
        bodyParser: false
    },
}

const pdfLimit = 5242880 // 5Mb

async function postulate(req, res) {
    const { fields, files } = await parseForm(req);

    const { name, email, position, phone } = fields;
    const { resumee } = files;

    const job = await Job.find({ title: position });

    if (!job) {
        throw 'Position doesn\'t exist';
    }

    if (resumee.mimetype !== 'application/pdf') {
        throw 'Only accept pdf files';
    }

    if (resumee.size > pdfLimit) {
        throw 'PDF files size cannot be bigger than 5Mb';
    }

    const subject = `Nueva postulación a ${position}`;
    const emailBody = `
    Nueva postulación a ${position} <br><br>
    <b>Nombre:</b> ${name}<br>
    <b>Email:</b> ${email}<br>
    <b>Teléfono:</b> ${phone}<br>
    <b>Posición:</b> ${position}<br>
    `
    const message = await sendEmail(subject, emailBody, [
        {
            filename: resumee.originalFilename,
            path: resumee.filepath
        }
    ]);

    console.log(message);

    return res.status(200).json({});
}