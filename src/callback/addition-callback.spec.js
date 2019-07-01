function slowProcessNumbers(a, b, callback) {
    return callback(a,b);
}

function slowAddition(a, b) {
    return a+b;
}

function subtraction(a, b) {
    return a-b;
}


it("should perform addition", () => {
        let result = slowProcessNumbers(2,1, slowAddition); 
        expect(result).toBe(3)
    }
);

it("should perform subtraction", () => {
    let result = slowProcessNumbers(2,1, subtraction);
    expect(result).toBe(1);
})

