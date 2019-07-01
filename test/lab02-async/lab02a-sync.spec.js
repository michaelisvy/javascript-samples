const syncService = require('../../src/lab02-async/lab02a-sync');

it('should make a synchronous call to greeting service',async()=> {
    
    let greeting = syncService.callGreeting("Sam");
    expect(greeting).toBe("hello Sam");
});

