const config = require("./config.json");
const accountRepository = require("./" + config.repository); 

function getAccountRepository() {
    return accountRepository;
}

module.exports = {getAccountRepository};