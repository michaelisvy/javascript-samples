const songWithDiscountService = require("./songWithDiscountService");
const songService = require("./songService");

const sinon = require('sinon');

describe('Using Sinon with Stubs', () => {
    let stub;

    afterEach(() => {
        stub.restore();
      });

    it('should call a Stub', () => {
        stub = sinon.stub(songService, "getSong").returns({
            title: "Ocean",
            artist: "John Butler Trio",
            year: 1998,
            price: 5
        });
        const song = songWithDiscountService.getSongWithDiscount();
        expect(song.title).toBe("Ocean");
        expect(song.price).toBe(4); // discount should have been applied
    });

    it('should call a Stub and use calledOnce', () => {
        stub = sinon.stub(songService, "getSong").returns({
            title: "Ocean",
            artist: "John Butler Trio",
            year: 1998,
            price: 5
        });
        const song = songWithDiscountService.getSongWithDiscount();
        expect(song.title).toBe("Ocean");
        sinon.assert.calledOnce(stub);
        expect(song.price).toBe(4); // discount should have been applied
    });

    it('should call a Stub that throws an error', () => {
        stub = sinon.stub(songService, "getSong").throws(new Error("my secret error"));
        const callFunction = function() { songWithDiscountService.getSongWithDiscount() }; 
        // needs to be wrapped in a function as we're using expect().toThrow()
        expect(callFunction).toThrow(new Error ("my secret error"));
        sinon.assert.calledOnce(stub);
    });
});