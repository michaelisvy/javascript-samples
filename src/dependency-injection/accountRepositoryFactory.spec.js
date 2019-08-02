const factory = require("./accountRepositoryFactory");

// next step: should implement singleton pattern
describe('Dependency Injection', () => {
    test('should use accountRepo1 dependency', () => {
        const accountRepo1 = factory.getAccountRepository();
       expect(accountRepo1.findAccount()).toEqual("account 1");
    });

    test('should test if factory returns a Singleton or not', () => {
        const instance1 = factory.getAccountRepository();
        const instance2 = factory.getAccountRepository();
        expect(instance1 === instance2).toBe(false);   
    });
});