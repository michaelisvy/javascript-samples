const syncService = require('./sync');

it('should make a synchronous call to greeting service',async()=> {
    
    let greeting = syncService.callGreeting("Sam");
    expect(greeting).toBe("hello Sam");
});

