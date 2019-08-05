const PersonService = require("./personService");
const PersonRepository = require('./personRepository');
const sinon = require("sinon");
const myPersonService = new PersonService();

test('should return name as Sam', () => {
    const myPersonRepository = new PersonRepository();
    const stubState = sinon.stub(myPersonRepository, 'findName').returns('Sam');
    myPersonService.personRepository = myPersonRepository;
    expect(myPersonService.findName()).toBe('hello Sam');
    stubState.restore();
});

test('should return name as John', () => {
    expect(myPersonService.findName()).toBe('hello John');
});
