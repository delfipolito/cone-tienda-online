import { apiHandler } from 'helpers/api';
import mongoose from "mongoose";
import Job from '../../../../models/job'

export default apiHandler({
    get: getJob
});

async function getJob(req, res) {
    const job_id = req.query.id;
    if (!mongoose.Types.ObjectId.isValid(job_id)) throw 'Job doesn\'t exist';
    const response = await Job.findOne({ _id: job_id, publish: true }, 'title description work_day area location tasks looking_for offer createdAt');
    return res.status(200).json(response);
}