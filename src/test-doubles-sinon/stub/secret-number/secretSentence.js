const secretNumber = require("./secretNumber");

function getSecretSentence() {
    return `the secret was: ${secretNumber.getSecretNumber()}`;
}

module.exports = {getSecretSentence};