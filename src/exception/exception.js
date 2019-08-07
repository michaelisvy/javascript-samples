function troubleMaker() {
    throw new Error("this is an error");
}

function troubleFriend() {
    return troubleMaker();
}

module.exports = {troubleMaker, troubleFriend};