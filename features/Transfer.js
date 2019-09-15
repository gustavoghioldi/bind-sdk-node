const auth = require('./Auth');
const unirest = require("unirest");
const config = require('../config');

module.exports = {
    create: async (bank_id, account_id, view_id, jsonModel) => {
        return new Promise(async (resolve, reject) => {
            const credentials = await auth.login();

            var req = unirest("POST", `${config.BIND_ENDPOINT}/v1/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/TRANSFER/transaction-requests`);

            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.type("json");
            req.send(jsonModel);
            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        });
    },
    getAll: async(bank_id, account_id, view_id)=> {
        return new Promise(async (resolve, reject)=> {
            const credentials = await auth.login();

            var req = unirest("GET", `${config.BIND_ENDPOINT}/v1/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/TRANSFER
            `);

            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.type("json");
            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        });
    },
    get: async(bank_id, account_id, view_id, transaction_id)=> {
        return new Promise(async (resolve, reject)=> {
            const credentials = await auth.login();

            var req = unirest("GET", `${config.BIND_ENDPOINT}/v1/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/TRANSFER/${transaction_id}`);

            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.type("json");
            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        });
    },
    delete: async(bank_id, account_id, view_id, transaction_id)=> {
        return new Promise(async (resolve, reject)=> {
            const credentials = await auth.login();

            var req = unirest("DELETE", `${config.BIND_ENDPOINT}/v1/banks/${bank_id}/accounts/${account_id}/${view_id}/transaction-request-types/TRANSFER/${transaction_id}`);

            req.headers({
                "cache-control": "no-cache",
                "authorization": "JWT "+credentials.token
            });

            req.type("json");
            req.end(function (res) {
                if (res.error) reject(res.error);
                resolve(res.body);
            });
        });
    },
    createBeneficiary: async(bank_id, account_id, view_id)=> {},
    getBeneficiarys: async (bank_id, account_id, view_id) => {},
    deleteBeneficiary: async (bank_id, account_id, view_id, counterparty_id) => {}

    
}