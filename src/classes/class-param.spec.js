// server.js
const greeting = require('./class-param');

it('should access class and get greeting message',async()=> {
    greeting.setFirstName("John");
    let greetingMessage = greeting.getGreetingMessage();
    expect(greetingMessage).toBe("hello John");
});