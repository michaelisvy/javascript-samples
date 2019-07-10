const promiseService = require('./promise');

it('should call promise01',async()=> {
    let promise = promiseService.promise01("Sam"); 
    let greeting = await promise;
    expect(greeting).toBe("hello Sam");
});

it('should call promise02',async()=> {
    let result = await promiseService.promise02("Sam");
    expect(result).toBe("hello Sam");
});
it('should call multiple promises',async()=> {
    let daltonPromise = Promise.all([
        promiseService.promise02("Joe"),
        promiseService.promise02("Jack"),
        promiseService.promise02("William"),
        promiseService.promise02("Averell")
    ])
    .then(function (responses) {
        expect(responses[0]).toBe("hello Joe");
        expect(responses[1]).toBe("hello Jack");
        expect(responses[2]).toBe("hello William");
        expect(responses[3]).toBe("hello Averell");
    });
    await daltonPromise;
});

it('should call async01 with async',async()=> {
    let promise = promiseService.async01("Sam");
    let greeting = await promise;
    expect(greeting).toBe("hello Sam");
});