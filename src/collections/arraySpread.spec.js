describe('Experiments on other Array functions', () => {
    test('should use push function', () => {
        const array = [0];
        array.push(1);
        array.push(2);
        expect(array).toEqual([0,1,2]);
    });

    test('should use spread operator', () => {
        const numbers1 = [1,2];
        const numbers2 = [3,4];
        const numbers3 = [...numbers1, ...numbers2, 5, 6]; // merges 3 arrays together
        expect(numbers3).toEqual([1,2,3,4,5,6]);
    });

    test('should use spread operator for a function to have a variable number of parameters', () => {
        expect(sum(1,2)).toBe(3);
        expect(sum(1,2,3,4)).toBe(10);
    });

    function sum(...numbers) {
        return numbers.reduce((accumulator, current) => 
             accumulator + current
        );
    };
});