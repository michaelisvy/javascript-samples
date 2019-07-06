let sinon = require("sinon");

var spy = sinon.spy();
spy("hello");

console.log(spy.firstCall.args);