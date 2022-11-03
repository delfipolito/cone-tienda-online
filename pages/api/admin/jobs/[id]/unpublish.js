import { apiHandler } from 'helpers/api';
import Job from '../../../../../models/job'

export default apiHandler({
    put: unpublish
});

async function unpublish(req, res) {
    const job = Job.findById(req.query.id);

    if (!job) throw 'Job Not Found';

    let response = await Job.findByIdAndUpdate(req.query.id, { publish: false });

    return res.status(200).json({});
}
