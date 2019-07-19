const sinon = require("sinon");
const secretSentence = require("./secretSentence");
const secretNmber = require("./secretNumber");

describe('Using Sinon with Stubs', () => {
    test('should call a Stub', () => {
        let stub = sinon.stub(secretNmber, "getSecretNumber").returns(22);
        const result = secretSentence.getSecretSentence();
        expect(result).toBe("the secret was: 22");
        stub.restore();
    });

    test('should call real function', () => {
        const result = secretSentence.getSecretSentence();
        expect(result).toBe("the secret was: 44");
    });
});