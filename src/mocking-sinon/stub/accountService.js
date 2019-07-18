var AccountRepository = require("./accountRepository");

module.exports = class AccountService {
    constructor() { 
        this.accountRepository = new AccountRepository();
    }

    findName() {
        return "hello " + this.accountRepository.findName();
    }
}