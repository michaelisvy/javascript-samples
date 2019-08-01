// server.js
const greetingService = require('./module');

it('should print val',async()=> {
    const greeting = greetingService.greet(); 
    expect(greeting).toBe("Hello");
});