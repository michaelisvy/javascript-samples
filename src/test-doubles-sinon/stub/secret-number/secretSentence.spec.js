const secretSentence = require("./secretSentence");
const secretNmber = require("./secretNumber");

var sinon = require('sinon');

describe('Using Sinon with Stubs', () => {
    it('should call a Stub and restore in the end', () => {
        let stub = sinon.stub(secretNmber, "getSecretNumber").returns(22);
        const result = secretSentence.getSecretSentence();
        expect(result).toBe("the secret was: 22");
        stub.restore();
    });

    it('should call real function', () => {
        const result = secretSentence.getSecretSentence();
        expect(result).toBe("the secret was: 44");
    });
});