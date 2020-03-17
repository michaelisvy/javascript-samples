
describe('Name of the group', () => {
    it('should use regular equal', () => {
        const assert = require('assert');
        assert.equal(1,1);
        assert.notEqual(1,2);

        const objectWithNumber = { a : { b : 1 } };
        const objectWithChar = { a : { b : '1' } };

        assert.notEqual(objectWithNumber, objectWithChar);
        assert.deepEqual(objectWithNumber, objectWithChar);
        assert.notDeepStrictEqual(objectWithNumber, objectWithChar);

    });
});