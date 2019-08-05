const AccountService = require("./accountService");
const sinon = require("sinon");

test('should return name as John', () => {
    const myAccountService = new AccountService();
    expect(myAccountService.findName()).toBe("John");
});

test('should return name as Jack', () => {
    const service = new AccountService();
    var repoMock = sinon.mock(service.accountRepository);
    repoMock.expects("findName").once().returns("Jack");
    expect(service.findName()).toEqual("Jack");
    repoMock.restore();
});