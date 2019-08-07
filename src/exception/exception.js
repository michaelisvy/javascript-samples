const CustomError = require("./CustomError")

function troubleMaker() {
    throw new Error("this is an error");
}

function troubleFriend() {
    return troubleMaker();
}

function customTroubleMaker() {
    throw new CustomError();
}

module.exports = {troubleMaker, troubleFriend, customTroubleMaker};