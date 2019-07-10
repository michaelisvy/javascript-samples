let AccountService = require("./accountService.js");
let sinon = require("sinon");

test('should return name as John', () => {
    let myAccountService = new AccountService();
    expect(myAccountService.findName()).toBe("John");
});

test('should return name as Jack', () => {
    let myAccountService = new AccountService();
    var mock = sinon.mock(myAccountService);
    mock.expects("findName");
    //mock.verify();
});