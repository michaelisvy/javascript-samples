const Person = require('./person');
const Greeting = require('./greeting');

it('should access class and display hello',async()=> {
    let myPerson = new Person("John");
    let myGreeting = new Greeting(myPerson);
    expect(myGreeting.greet()).toBe("hello John");
});