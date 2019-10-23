/**
 * slightly shorter. Might be more elegant for people who are comfortable with it.
 */
function recursiveFactorial(number) {
    if (number === 1) {
        return number;
    } else return number * recursiveFactorial (number-1);
}

/**
 * Easier to read
 */
function whileFactorial(number) {
    let total = 1;
    do {
        total = total * number;
        number--;
    } while (number > 1)
    return total;
}

test('recursive 1', () => {
    expect(recursiveFactorial(1)).toBe(1);
});

test('recursive 3', () => {
    expect(recursiveFactorial(3)).toBe(6);
});

test('while 1', () => {
    expect(whileFactorial(1)).toBe(1);
});

test('while 3', () => {
    expect(whileFactorial(3)).toBe(6);
});