let AccountService = require("./accountService");
let AccountRepository = require('./accountRepository');
let sinon = require("sinon");

test('should return name as Sam', () => {
    let myAccountService = new AccountService();
    let myAccountRepository = new AccountRepository();
    sinon.stub(myAccountRepository, 'findName'). returns('Sam');
    myAccountService.accountRepository = myAccountRepository;
    expect(myAccountService.findName()).toBe('hello Sam');

});

test('should return name as John', () => {
    let myAccountService = new AccountService();
    expect(myAccountService.findName()).toBe('hello John');

});
