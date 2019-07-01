// server.js
const greetingService = require('../../src/lab01-modules-classes/lab01b-module');

it('should print val',async()=> {
    let greeting = greetingService.greet(); 
    expect(greeting).toBe("Hello");
});