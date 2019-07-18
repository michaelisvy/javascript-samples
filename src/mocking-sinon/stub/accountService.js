var AccountRepository = require("./accountRepository");

module.exports = class AccountService {
    constructor() { 
        this.accountRepository = new AccountRepository();
    }

    findName() {
        return this.accountRepository.findName();
    }
}