import { apiHandler } from 'helpers/api';
import Job from "../../../../../models/job"

export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

function getById(req, res) {
    const job = Job.findById(req.query.id);

    if (!job) throw 'Job Not Found';

    return res.status(200).json(job);
}

async function update(req, res) {
    const job = Job.findById(req.query.id);

    if (!job) throw 'Job Not Found';

    await Job.findByIdAndUpdate(req.query.id, params);
    return res.status(200).json({});
}

async function _delete(req, res) {
    await Job.findByIdAndDelete(req.query.id);
    return res.status(200).json({});
}