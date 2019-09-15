const cache = require('memory-cache');

class LoginModel {
    constructor(username, password) {
       this.save(username, password);
    }

    save(username, password) {
        cache.put('bind.username', username);
        cache.put('bind.password', password);
    } 

}

module.exports = LoginModel;