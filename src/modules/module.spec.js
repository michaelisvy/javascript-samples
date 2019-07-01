// server.js
const greetingService = require('./module');

it('should print val',async()=> {
    let greeting = greetingService.greet(); 
    expect(greeting).toBe("Hello");
});