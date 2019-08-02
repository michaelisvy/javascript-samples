const greeter = require('./index'); //specifying folder name is enough

it('should access module from index.js table',async()=> {
    const greeting = greeter.greet(); 
    expect(greeting).toBe("Hello");
});