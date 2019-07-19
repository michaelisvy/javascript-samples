var PersonRepository = require("./personRepository");

module.exports = class PersonService {
    constructor() { 
        this.personRepository = new PersonRepository();
    }

    findName() {
        return "hello " + this.personRepository.findName();
    }
}