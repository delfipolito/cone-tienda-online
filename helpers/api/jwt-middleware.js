const { expressjwt: jwt } = require('express-jwt');
const util = require('util');
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req, res) {
    const middleware = jwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            { url: '/api/users/authenticate', methods: ['POST'] },
            { url: '/api/jobs', methods: ['GET'] },
            { url: /\/api\/jobs/i, methods: ['GET', 'POST'] },
        ]
    });

    return util.promisify(middleware)(req, res);
}