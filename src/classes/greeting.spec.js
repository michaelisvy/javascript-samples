const Greeting = require('./greeting');

it('should access class and display hello',async()=> {
    const myGreeting = new Greeting("John");
    expect(myGreeting.greet()).toBe("hello John");
});