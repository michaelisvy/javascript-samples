/* this type structure is typically called `Object` or `Dictionary`
*/
let specialNumbers = {
    3: "Foo",
    5: "Bar"    
}

it('should be able to retrieve a value from dictionnary/Object', () => {
    expect(specialNumbers[3]).toBe("Foo");
});

it('should check the type of the key elements', () => {
    let keys = Object.keys(specialNumbers);
    expect(typeof keys[0]).toBe("string");
    expect(keys[0]).toBe("3");
});

it('should loop through all values in dictionnary/Object', () => {
    for(let number in specialNumbers) {      
        if(number === '3') { // I cannot use `===` because keys are stored as string, not int
            expect(specialNumbers[number]).toBe("Foo");
        }
        if(number === '5') {
            expect(specialNumbers[number]).toBe("Bar");
        }
    }
});