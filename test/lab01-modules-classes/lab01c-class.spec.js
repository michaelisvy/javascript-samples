const Person = require('../../src/lab01-modules-classes/lab01c-person');
const Greeting = require('../../src/lab01-modules-classes/lab01c-greeting');

it('should access class and display hello',async()=> {

    let myPerson = new Person("John");
    let myGreeting = new Greeting(myPerson);
    expect(myGreeting.greet()).toBe("hello John");
});