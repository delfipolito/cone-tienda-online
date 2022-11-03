const bcrypt = require('bcryptjs');
import getConfig from 'next/config';
import User from '../../../../models/user';

import { apiHandler } from 'helpers/api';

export default apiHandler({
    put: changePassword
});

async function changePassword(req, res) {
    const user_id = req.query.id
    const { current_password, new_password } = req.body;
    const user = await User.findById(user_id);

    // validate
    if (!(user && bcrypt.compareSync(current_password, user.password))) {
        throw 'Current password is incorrect';
    }
    // Update password
    user.password = bcrypt.hashSync(new_password, 10);
    user.save();

    // return basic user details and token
    return res.status(200).json({});
}