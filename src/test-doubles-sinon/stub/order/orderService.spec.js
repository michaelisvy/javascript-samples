const orderService = require("./orderService");
const emailService = require("./emailService");

const sinon = require('sinon');

describe('Using Sinon with Stubs', () => {
    let stub;

    afterEach(() => {
        stub.restore();
      });

    it('should call a Stub', () => {
        stub = sinon.stub(emailService, "sendEmail").returns({
            content: "Your order has been processed",
            to: "john@butler.com",
            status: "sent"
        });
        const orderReport = orderService.processOrder();
        expect(orderReport.status).toBe("sent");
    });

    it('should call a Stub and use calledOnce', () => {
        stub = sinon.stub(emailService, "sendEmail").returns({
            content: "Your order has been processed",
            to: "john@butler.com",
            status: "sent"
        });
        const orderReport = orderService.processOrder();
        sinon.assert.calledOnce(stub);
        expect(orderReport.status).toBe("sent");
    });

    it('should call a Stub that throws an error', () => {
        stub = sinon.stub(emailService, "sendEmail").throws(new Error("my email error"));
        const callFunction = function() { orderService.processOrder() }; 
        // needs to be wrapped in a function as we're using expect().toThrow()
        expect(callFunction).toThrow(new Error ("my email error"));
        sinon.assert.calledOnce(stub);
    });
});