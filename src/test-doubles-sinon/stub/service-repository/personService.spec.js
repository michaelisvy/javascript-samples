let PersonService = require("./personService");
let PersonRepository = require('./personRepository');
let sinon = require("sinon");
let myPersonService = new PersonService();

test('should return name as Sam', () => {
    let myPersonRepository = new PersonRepository();
    const repositoryState = sinon.stub(myPersonRepository, 'findName').returns('Sam');
    myPersonService.personRepository = myPersonRepository;
    expect(myPersonService.findName()).toBe('hello Sam');
    repositoryState.restore();
});

test('should return name as John', () => {
    expect(myPersonService.findName()).toBe('hello John');
});
