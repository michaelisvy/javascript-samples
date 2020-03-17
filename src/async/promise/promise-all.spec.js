
it('should call multiple promises',async()=> {
    const daltonPromise = Promise.all([
        promiseSomething("Joe"),
        promiseSomething("Jack"),
        promiseSomething("William"),
        promiseSomething("Averell")
    ])
    .then(function (responses) {
        expect(responses[0]).toBe("hello Joe");
        expect(responses[1]).toBe("hello Jack");
        expect(responses[2]).toBe("hello William");
        expect(responses[3]).toBe("hello Averell");
    });
    await daltonPromise;
});

function promiseSomething(name) {
    return new Promise(function(resolve, reject) {
       resolve("hello " +name);
    });
}