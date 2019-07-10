describe('Experiments on equal / truthy falsy', () => {
    it('should show that Javascript allows to change the type of a variable', () => {
        let mutant = 1;
        expect(typeof mutant).toBe("number");

        mutant = "1";
        expect(typeof mutant).toBe("string");

        mutant= [2, "3"];
        expect(typeof mutant).toBe("object");
    });

    it('should showcase loose/strict equality', () => {
        expect(1 == '1').toBe(true); // 1 is converted to string before comparison
        expect(1 === '1').toBe(false);

        let x; // no default value
        expect(x).toBe(undefined);
    });

    it('should showcase loose/strict equality for arrays', () => {
        expect(1 == [1]).toBe(true); // also works with arrays
        expect(1 == [1,0]).toBe(false); // thankfully it doesn't work when array has more than one cell
        expect(1 === [1]).toBe(false);
    });

    it('should showcase more examples with strict/loose equality', () => {
        // behaves as expected when comparing 2 numbers
        expect(2 === 3).toBe(false);
        expect(2 === 2.0).toBe(true);
        expect(2 === "2").toBe(false); // should fail because they are not of the same type

        // what happens when both expressions are NaN? (Not A Number)
        expect("2" === "2").toBe(true);
        expect("2" === "2.0").toBe(false);
    });

    it('should showcase truthy/falsy', () => {
        let x = 22;
        expect(x).toBe(22); // by default: strict equality. Cannot be compared to a boolean
        expect(x).toBeTruthy(); // truthy: 22 is considered as equal to `true`
        
        if(x) {
            // expected behaviour. Expression inside `if` is truthy by default.
        } else {
            fail("expression inside if condition should have been truthy");
        } 
    });
});