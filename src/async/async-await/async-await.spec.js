it('should call async01 with async',async()=> {
    let promise = sayHello("Sam");
    let greeting = await promise;
    expect(greeting).toBe("hello Sam");
});

async function sayHello(name) {
    return "hello " + name;
 }