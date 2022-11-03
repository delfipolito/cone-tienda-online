import { apiHandler } from 'helpers/api';
import Job from '../../../../../models/job'

export default apiHandler({
    put: publish
});

async function publish(req, res) {
    const job = Job.findById(req.query.id);

    if (!job) throw 'Job Not Found';

    let response = await Job.findByIdAndUpdate(req.query.id, { publish: true });
    
    return res.status(200).json({});
}
