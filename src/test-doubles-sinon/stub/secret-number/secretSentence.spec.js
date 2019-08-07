const secretSentence = require("./secretSentence");
const secretNmber = require("./secretNumber");

const sinon = require('sinon');

describe('Using Sinon with Stubs', () => {
    it('should call a Stub', () => {
        const stub = sinon.stub(secretNmber, "getSecretNumber").returns(22);
        const result = secretSentence.getSecretSentence();
        stub.restore(); // restore should always happen before expect
        expect(result).toBe("the secret was: 22");
    });

    it('should call a Stub and use calledOnce', () => {
        const stub = sinon.stub(secretNmber, "getSecretNumber").returns(24);
        const result = secretSentence.getSecretSentence(); 
        sinon.assert.calledOnce(stub);
        stub.restore();
        expect(result).toBe("the secret was: 24");
    });

    it('should call a Stub that throws an error', () => {
        const stub = sinon.stub(secretNmber, "getSecretNumber").throws(new Error("my secret error"));
        let callFunction = function() {secretSentence.getSecretSentence()}; 
        // needs to be wrapped in a function as we're using expect().toThrow()
        expect(callFunction).toThrow(new Error ("my secret error"));
        stub.restore();

    });
});