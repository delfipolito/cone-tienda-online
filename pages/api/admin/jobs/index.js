import { apiHandler } from 'helpers/api';
import Job from '../../../../models/job'

export default apiHandler({
    get: getJobs,
    post: addJob
});

async function getJobs(req, res) {
    const response = await Job.find();
    return res.status(200).json(response);
}

async function addJob(req, res) {
    const { ...job } = req.body;
    const createdJob = await Job.create(job);
    return res.status(200).json({});

}