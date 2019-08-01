it('should call async01 with async',async()=> {
    const promise = sayHello("Sam");
    const greeting = await promise;
    expect(greeting).toBe("hello Sam");
});

async function sayHello(name) {
    return "hello " + name;
 }