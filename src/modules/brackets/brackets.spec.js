const greet = require("./example1"); // exported with no brackets

const {hello1, hello2} = require("./example2"); // both functions have been exported with brackets

describe('Name of the group', () => {
    test('should ', () => {
        expect(greet()).toEqual("hello example1");
    });
    test('should ', () => {
        expect(hello1()).toEqual("hello1 example2");
        expect(hello2()).toEqual("hello2 example2");
    });
});