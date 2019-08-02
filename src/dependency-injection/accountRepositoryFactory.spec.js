const factory = require("./accountRepositoryFactory");

// next step: should implement singleton pattern

describe('Dependency Injection', () => {
    test('should use accountRepo1 dependency', () => {
        let accountRepo1 = factory.getAccountRepository();
       expect(accountRepo1.findAccount()).toEqual("account 1");
    });

    test('should test if factory returns a Singleton or not', () => {
        let instance1 = factory.getAccountRepository();
        let instance2 = factory.getAccountRepository();
        expect(instance1 === instance2).toBe(false);   
    });

});