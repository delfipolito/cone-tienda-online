const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';
import User from '../../../models/user'

import { apiHandler } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
    post: authenticate
});

async function authenticate(req, res) {
    const { email, password } = req.body;
    console.log('Login... ', email);
    const user = await User.findOne({ email: email });
    // validate
    if (!(user && bcrypt.compareSync(password, user.password))) {
        console.log('Username or password is incorrect');
        throw 'Username or password is incorrect';
    }
    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user._id, email: user.email }, serverRuntimeConfig.secret, { expiresIn: '1d' });
    
    // return basic user details and token
    return res.status(200).json({
        id: user._id,
        email: user.email,
        token
    });
}