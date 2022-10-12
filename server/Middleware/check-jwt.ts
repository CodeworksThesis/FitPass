const { expressjwt: jwt } = require("express-jwt")
const jwks = require('jwks-rsa')
require('dotenv').config()

const domain = process.env.AUTH0_DOMAIN
const audience = process.env.AUTH0_AUDIENCE

//middleware
const jwtCheck = jwt({
    //
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${domain}/.well-known/jwks.json`
    }),
    audience: audience,
    issuer: `https://${domain}/`,
    algorithms: ['RS256']
})

module.exports = {
    jwtCheck,
};


