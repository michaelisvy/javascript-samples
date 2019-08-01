const specialNumbers = new Map([
    [3, "Foo"],
    [5, "Bar"]
]);

test('should get value from key', () => {
    expect(specialNumbers.get(3)).toBe("Foo");
});

test('should check that keys are of type `number`', () => {
    specialNumbers.forEach((value, key) => {
        expect(typeof key).toBe("number");
    }); 
});

test('should check the type of a dictionary', () => {
    expect(typeof specialNumbers).toBe("object"); // Type of a Map is Object, not Map
});

test('should loop over Map', () => {
    specialNumbers.forEach( (value, number) => { // really weird: parameters are in the wrong order
                                                 // (value, key) instead of (key, value)
        if (number === 3) { // `===` is the right operator to use because number is a digit, not a string
            expect(value).toBe("Foo");
        }
    });
});