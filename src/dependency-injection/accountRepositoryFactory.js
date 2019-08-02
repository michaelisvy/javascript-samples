const accountRepository1 = require("./accountRepository1");
const accountRepository2 = require("./accountRepository2");
const config = require("./config.json");

function getAccountRepository() {
    // as of now, it is not a singleton
    if(config.repository === "repo1") {
        return accountRepository1; 
    } else {
        return accountRepository2;
    }
}

module.exports = {getAccountRepository};