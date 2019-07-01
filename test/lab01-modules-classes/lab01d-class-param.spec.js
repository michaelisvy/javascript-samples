// server.js
const greeting = require('../../src/lab01-modules-classes/lab01d-class-param');

it('should access class and get greeting message',async()=> {
    greeting.setFirstName("John");
    let greetingMessage = greeting.getGreetingMessage();
    expect(greetingMessage).toBe("hello John");
});