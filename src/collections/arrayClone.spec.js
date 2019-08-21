describe('Experiments on Array clones', () => {
    
    test('should clone a simple array using slice', () => {
        const sampleData = ['a','b','c','d','e'];
        const cloneData = sampleData.slice(); 
        cloneData[0] = 'aa';
        expect(sampleData).toEqual(['a','b','c','d','e']);
        expect(cloneData).toEqual(['aa','b','c','d','e']);
    });
});
    