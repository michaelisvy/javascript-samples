it('should print val',async()=> {
    const {greet1} = require('./module');
    const greeting = greet1(); 
    expect(greeting).toBe("Hello1");
});

it('should print val',async()=> {
    const module = require('./module');
    const greeting = module.greet1(); 
    expect(greeting).toBe("Hello1");
});