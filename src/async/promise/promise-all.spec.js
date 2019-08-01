it('should call promise01',async()=> {
    const promise = sayHello("Sam"); 
    const greeting = await promise;
    expect(greeting).toBe("hello Sam");
});

it('should call promise02',async()=> {
    const result = await sayHello("Sam");
    expect(result).toBe("hello Sam");
});
it('should call multiple promises',async()=> {
    const daltonPromise = Promise.all([
        sayHello("Joe"),
        sayHello("Jack"),
        sayHello("William"),
        sayHello("Averell")
    ])
    .then(function (responses) {
        expect(responses[0]).toBe("hello Joe");
        expect(responses[1]).toBe("hello Jack");
        expect(responses[2]).toBe("hello William");
        expect(responses[3]).toBe("hello Averell");
    });
    await daltonPromise;
});

function sayHello(name) {
    return new Promise(function(resolve, reject) {
       resolve("hello " +name);
    });
}