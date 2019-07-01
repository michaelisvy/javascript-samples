// server.js
const greeter = require('./index');

it('should access module from index.js table',async()=> {
    let greeting = greeter.greet(); 
    expect(greeting).toBe("Hello");
});