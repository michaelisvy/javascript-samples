const PersonService = require("./personService");
const PersonRepository = require('./personRepository');
const sinon = require("sinon");
const myPersonService = new PersonService();

test('should return name as Sam', () => {
    const myPersonRepository = new PersonRepository();
    const stub = sinon.stub(myPersonRepository, 'findName').returns('Sam');
    myPersonService.personRepository = myPersonRepository;
    expect(myPersonService.findName()).toBe('hello Sam');
    stub.restore();
});

test('should return name as Sam and make sure function is called once only', () => {
    const myPersonRepository = new PersonRepository();
    const stub = sinon.stub(myPersonRepository, 'findName').returns('Sam');
    myPersonService.personRepository = myPersonRepository;
    const result = myPersonService.findName();
    sinon.assert.calledOnce(stub);
    expect(result).toBe('hello Sam');
    stub.restore();
});

test('should check how service behaves when Repository throws an Error', () => {
    const myPersonRepository = new PersonRepository();
    const stub = sinon.stub(myPersonRepository, 'findName').
                                throws(new Error("database connection issue"));
    myPersonService.personRepository = myPersonRepository;
    const callFunction = function() { myPersonService.findName() };
    expect(callFunction).toThrow(new Error("database connection issue"));
    sinon.assert.calledOnce(stub);
    stub.restore();
});

test('should return name as John', () => {
    expect(myPersonService.findName()).toBe('hello John');
});
