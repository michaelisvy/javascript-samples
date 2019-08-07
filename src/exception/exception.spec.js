const {troubleMaker, troubleFriend, customTroubleMaker} = require("./exception");
const CustomError = require("./CustomError");

describe('Tests on Exceptions', () => {
    test('should call a function tha throws an exception', () => {
        const troubleMakerCall = function() {troubleMaker()};
        expect(troubleMakerCall).toThrow(new Error("this is an error"));
    });

    test('should call an exception directly', () => {
        const troubleMakerCall = function() {troubleMaker()};
        expect(troubleMakerCall).toThrow(new Error("this is an error"));
    });

    test('should call a function that propagates an exception', () => {
        const troubleMakerCall = function() {troubleFriend()};
        expect(troubleMakerCall).toThrow(new Error("this is an error"));
    });

    test('should test a function that returns a custom error', () => {
        const troubleMakerCall = function() {customTroubleMaker()};
        expect(troubleMakerCall).toThrow(new CustomError());
    });
});