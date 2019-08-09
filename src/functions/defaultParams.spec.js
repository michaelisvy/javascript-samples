function sayHello(name = "Bob") {
    return `hello ${name}`;
}

test('should ', () => {
    expect(sayHello("Sam")).toEqual("hello Sam");
    expect(sayHello()).toEqual("hello Bob");
});