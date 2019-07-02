// server.js
const Greeting = require('./class-param');

it('should access class and get greeting message',async()=> {
    var myGreeting = new Greeting("John");
    let greetingMessage = myGreeting.getGreetingMessage();
    expect(greetingMessage).toBe("hello John");
    expect(myGreeting.firstName).toBe("John"); // attributes are public
    expect(myGreeting.uninitialisedAttribute).toBe(0);
});