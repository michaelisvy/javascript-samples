const AccountService = require("./accountService.js");
const sinon = require("sinon");

test('should return name as John', () => {
    const myAccountService = new AccountService();
    expect(myAccountService.findName()).toBe("John");
});

test('should return name as Jack', () => {
    const myAccountService = new AccountService();
    var mock = sinon.mock(myAccountService);
    mock.expects("findName");
    // mock.verify();
});