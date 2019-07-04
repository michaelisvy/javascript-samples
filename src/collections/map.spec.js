let specialNumbers = new Map([
    [3, "Foo"],
    [5, "Bar"]
]);

test('should get value from key', () => {
    expect(specialNumbers.get(3)).toBe("Foo");
});

test('should loop over Map', () => {
    specialNumbers.forEach( (value, number) => { // really weird: parameters are in the wrong order
                                                 // (value, key) instead of (key, value)
        console.log(value);
        if (number === 3) { // `===` is ok because number is a digit, not a string
            expect(value).toBe("Foo");
        }
    });
});