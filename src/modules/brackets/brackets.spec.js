const greet = require("./example1"); // exported with no brackets
const {hello1, hello2} = require("./example2"); // both functions have been exported with brackets
const {helloInstance3} = require("./example3");

describe('Name of the group', () => {
    test('example1', () => {
        expect(greet()).toEqual("hello example1");
    });
    test('example2', () => {
        expect(hello1()).toEqual("hello1 example2");
        expect(hello2()).toEqual("hello2 example2");
    });

    test('example3', () => {
        expect(helloInstance3.greetClass()).toEqual("hello");
    });
});