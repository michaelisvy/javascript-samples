let AccountService = require("./accountService");
let AccountRepository = require('./accountRepository');
let sinon = require("sinon");

test('should return name as John', () => {
    let myAccountService = new AccountService();
    let myAccountRepository = new AccountRepository();
    const accountRepoStub = sinon.stub(myAccountRepository, 'findName'). returns('Sam');
    expect(myAccountRepository.findName()).toBe('Sam');

});

test.skip('should return name as Jack', () => {
    let myAccountService = new AccountService();
    var mock = sinon.mock(myAccountService);
    mock.expects("findName");
    // mock.verify();
});