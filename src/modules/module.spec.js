// server.js
const {greet} = require('./module');

it('should print val',async()=> {
    const greeting = greet(); 
    expect(greeting).toBe("Hello");
});