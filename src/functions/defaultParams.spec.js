function sayHello(name = "Bob") {
    return `hello ${name}`;
}

function sayMultipleHellos(names = ["Bob"]) {
    return `hello ${names}`;
}

test('should test default parameters', () => {
    expect(sayHello("Sam")).toEqual("hello Sam");
    expect(sayHello()).toEqual("hello Bob");
});

test('should test default parameters for an array', () => {
    expect(sayMultipleHellos(["Sam"])).toEqual("hello Sam");
    expect(sayMultipleHellos()).toEqual("hello Bob");
});