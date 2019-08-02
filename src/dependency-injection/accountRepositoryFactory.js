const AccountRepository1 = require("./accountRepository1");
const AccountRepository2 = require("./accountRepository2");
const config = require("./config.json");

function getAccountRepository() {
    // as of now, it is not a singleton
    if(config.repository === "repo1") {
        return new AccountRepository1(); 
    } else {
        return new AccountRepository2();
    }
}

module.exports = {getAccountRepository};