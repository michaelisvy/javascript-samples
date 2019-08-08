const songService = require("./songService");

function getSongWithDiscount() {
    const song = songService.getSong();
    song.price = 0.8 * song.price;
    return song;
}
module.exports = {getSongWithDiscount};