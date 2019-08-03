// functional programing: I don't see the factory, I just see its method
const {getAccountRepository} = require("./accountRepositoryFactory");

describe('Dependency Injection', () => {
    test('should use accountRepo1 dependency', () => {
        const findAccount = getAccountRepository();
       expect(findAccount()).toEqual("account 1");
    });

    test('should test if factory returns a Singleton or not', () => {
        const instance1 = getAccountRepository();
        const instance2 = getAccountRepository();
        expect(instance1 === instance2).toBe(true);   
    });
});