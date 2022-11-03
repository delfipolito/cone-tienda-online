import { apiHandler } from 'helpers/api';
import Job from '../../../models/job'

export default apiHandler({
    get: getJobs
});

async function getJobs(req, res) {
    const response = await Job.find({ publish: true, deletedAt: null }, 'title description');
    return res.status(200).json(response);
}