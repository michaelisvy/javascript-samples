let AccountService = require("./accountService");
let AccountRepository = require('./accountRepository');
let sinon = require("sinon");
let myAccountService = new AccountService();
    

test('should return name as Sam', () => {
    let myAccountRepository = new AccountRepository();
    const repositoryState = sinon.stub(myAccountRepository, 'findName'). returns('Sam');
    myAccountService.accountRepository = myAccountRepository;
    expect(myAccountService.findName()).toBe('hello Sam');
    repositoryState.restore();

});

test('should return name as John', () => {
    expect(myAccountService.findName()).toBe('hello John');

});
