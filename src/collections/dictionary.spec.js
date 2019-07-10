/* this type structure is typically called `Object` or `Dictionary`
*/

let specialNumbers = {
    3: "Foo",
    5: "Bar"    
}


test('should be able to retrieve a value from dictionnary/Object', () => {
    
    expect(specialNumbers[3]).toBe("Foo");
    
});

test('should check the type of the key elements', () => {
    let keys = Object.keys(specialNumbers);
    expect(typeof keys[0]).toBe("string");
    expect(keys[0]).toBe("3");
    
});

test('should loop through all values in dictionnary/Object', () => {
    for(number in specialNumbers) {      
        if(number == 3) { // I cannot use `===` because keys are stored as string, not int
            expect(specialNumbers[number]).toBe("Foo");
        }
        if(number == 5) {
            expect(specialNumbers[number]).toBe("Bar");
        }
 
    }
    
});
