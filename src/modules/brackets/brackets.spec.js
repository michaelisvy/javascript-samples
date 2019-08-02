const greet = require("./example1"); // exported with no brackets

describe('Name of the group', () => {
    test('should ', () => {
        expect(greet()).toEqual("hello");
    });
});