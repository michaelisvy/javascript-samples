it('should make a synchronous call to greeting service',async()=> {
    const greeting = callGreeting("Sam");
    expect(greeting).toBe("hello Sam");
});

function callGreeting(name) {
       return greeting(name);
}

function greeting(name) {
    return "hello " + name;
 }