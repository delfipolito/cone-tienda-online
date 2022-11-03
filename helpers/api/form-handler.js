import formidable from "formidable";

export const parseForm = async (req) => {

    return await new Promise(async (resolve, reject) => {

        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            else resolve({ fields, files });
        });
    });
};