const sinon = require("sinon");
const secretSentence = require("./secretSentence");
const secretNmber = require("./secretNumber");

const sinonTestLib = require("sinon-test");
const sinonTest = sinonTestLib(sinon);


describe('Using Sinon with Stubs', () => {
    test('should call a Stub and restore in the end', () => {
        let stub = sinon.stub(secretNmber, "getSecretNumber").returns(22);
        const result = secretSentence.getSecretSentence();
        expect(result).toBe("the secret was: 22");
        stub.restore();
    });

    test('should call a Stub in sandbox using sinon-test', sinonTest(() => {
        let stub = sinon.stub(secretNmber, "getSecretNumber").returns(22);
        const result = secretSentence.getSecretSentence();
        expect(result).toBe("the secret was: 22");
        stub.restore();
    }));

    test('should call real function', () => {
        const result = secretSentence.getSecretSentence();
        expect(result).toBe("the secret was: 44");
    });
});