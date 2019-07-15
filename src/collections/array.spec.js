const sampleData = ['a','b','c','d','e'];

describe('Experiments on Array functions', () => {
    test('should extract part of an array and expect value for one cell', () => {
        let extractedData = sampleData.slice(1,3); // second element to 4th element
        expect(extractedData[0]).toBe('b');
        expect(extractedData).toEqual(['b', 'c']); // need to use toEqual so compares by value
    });

    test('should show that negative numbers start from the end of the index', () => {
        let extractedData = sampleData.slice(-3,-1);
        expect(extractedData).toEqual(['c', 'd']);
    });

    test('should loop using a for loop', () => {
        const numbers = [1,2,3,4];
        let sumNumbers = 0;
        for (let index = 0; index < numbers.length; index++) {
            sumNumbers += numbers[index];           
        }
        expect(sumNumbers).toBe(10);
    });

    test('should loop using forEach', () => {
        // forEach is more readable than for. However I can't break half way
        // for is more performant than forEach (but that's unsignificant most of the times)
        const numbers = [1,2,3,4];
        let sumNumbers = 0;
        numbers.forEach(
                (element) => { sumNumbers += element }
        );
        expect(sumNumbers).toBe(10);
    });

    test('should reduce function inline', () => {
        const numbers = [1,2,3,4];
        let sumNumbers = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue
        );
        expect(sumNumbers).toBe(10);
    });

    test('should reduce function with method block', () => {
        const numbers = [1,2,3,4];
        let sumNumbers = numbers.reduce (
            function(accumulator, currentValue) {
                return accumulator + currentValue;
            }
        )
        expect(sumNumbers).toBe(10);
    });
});