function sayHello(name = "Bob") {
    return `hello ${name}`;
}

function sayMultipleHellos(names = ["Bob"]) {
    return `hello ${names}`;
}

function saySpreadHellos(...names) { // default parameters do not work when using the Spread operator
    if (names.length === 0) {
        names = [];
    }
    return `hello ${names}`;
}

test('should test default parameters', () => {
    expect(sayHello("Sam")).toEqual("hello Sam");
    expect(sayHello()).toEqual("hello Bob");
});

test('should test default parameters for an array', () => {
    expect(sayMultipleHellos(["Sam", "John"])).toEqual("hello Sam,John");
    expect(sayMultipleHellos()).toEqual("hello Bob");
});

test('should test default parameters for an array using spread operator', () => {
    expect(saySpreadHellos("Sam", "John")).toEqual("hello Sam,John");
    expect(saySpreadHellos()).toEqual("hello ");
});