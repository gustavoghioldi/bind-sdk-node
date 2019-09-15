const auth = require('./Auth');
const unirest = require("unirest");
const config = require('../config');

module.exports = {
    isBanked: async (cuit)=> {
        return new Promise(async(resolve, reject)=>{
            const credentials = await auth.login();
            const req = unirest("GET", `${config.BIND_ENDPOINT}/v1/persons/${cuit}/banks`);

            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        })
    }
}