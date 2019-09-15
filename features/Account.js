const auth = require('./Auth');
const unirest = require("unirest");
const config = require('../config');

module.exports = {
    getViews: async (bank_id) => {
        return new Promise(async (resolve, reject) => {
            const credentials = await auth.login();
        
            const req = unirest("GET", `${config.BIND_ENDPOINT}/v1/banks/${bank_id}/accounts`);

            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });

        });
    },
    getAccounts: async(bank_id, view_id) => {
        return new Promise(async(resolve, reject)=> {
            const credentials = await auth.login();
            const req = unirest("GET", `${config.BIND_ENDPOINT}/v1/banks/${bank_id}/accounts/${view_id}`);
            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        })
    },
    getAccountDetail: async (bank_id, account_id, view_id) => {
        return new Promise(async(resolve, reject)=> {
            const credentials = await auth.login();
            const req = unirest("GET", `${config.BIND_ENDPOINT}/v1/banks/${bank_id}/accounts/${account_id}/${view_id}`);
            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        });
    },
    getMovements: async (bank_id, account_id, view_id) => {
        return new Promise(async(resolve, reject)=> {
            const credentials = await auth.login();
            const req = unirest("GET", `${config.BIND_ENDPOINT}/v1/banks/${bank_id}/accounts/${account_id}/${view_id}/transactions`);
            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        })
    },
    getAccountByAlias: async(alias) => {
        return new Promise(async (resolve, reject)=> {
            const credentials = await auth.login();
            const req = unirest("GET", `${config.BIND_ENDPOINT}/v1/accounts/alias/${alias}`);
            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        })
    },
    getAccountByCBUorCVU: async(cbu_cvu) => {
        return new Promise(async (resolve, reject)=> {
            const credentials = await auth.login();
            const req = unirest("GET", `${config.BIND_ENDPOINT}/v1/accounts/cbu/${cbu_cvu}`);
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
};