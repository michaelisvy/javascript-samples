describe('Experiments on equal / truthy falsy', () => {
    it('should be able to change the type of a variable', () => {
        let x = 1;
        expect(typeof x).toBe("number");

        x = "1";
        expect(typeof x).toBe("string");

        x= [2, "3"];
        expect(typeof x).toBe("object");
    });
    
});