// server.js
const greeter = require('../../src/lab01-modules-classes/lab-01a-index');

it('should access module from index.js table',async()=> {
    let greeting = greeter.greet(); 
    expect(greeting).toBe("Hello");
});