const unirest = require("unirest");
const config = require('../config')
const cache = require('memory-cache')

module.exports = {
  login: async (username, password) => {
    if (!username) username = cache.get('bind.username');
    if (!password) password = cache.get('bind.password'); 
    return new Promise((resolve, reject) => {
      var req = unirest("POST", `${config.BIND_ENDPOINT}/v1/login/jwt`);
      req.headers({
        "cache-control": "no-cache",
        "content-type": "application/json"
      });
      
      req.type("json");
      req.send({
        "username": username,
        "password": password
      });

      req.end(function (res) {
        if (res.error) reject(res.error);
        resolve(res.body);
      });
    });

  }
};
