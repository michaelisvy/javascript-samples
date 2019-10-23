const clonedeep = require('lodash.clonedeep')

describe('Experiments on Array clones', () => {
    test('should copy an object', () => {
        const s1 = new Song("Little Wing");
        const s2 = Object.assign({}, s1);
        s2.title = "Hey Joe";

        expect(s1.title).toEqual("Little Wing");
        expect(s2.title).toEqual("Hey Joe");        
    });
    
    test('should clone a simple array using slice', () => {
        const originalData = ['a','b','c','d','e'];
        const cloneData = originalData.slice(); 
        cloneData[0] = 'aa';
        expect(originalData).toEqual(['a','b','c','d','e']);
        expect(cloneData).toEqual(['aa','b','c','d','e']);
    });

    test('should make a deep clone', () => {
        const originalSongs = [new Song("Little Wing"), new Song("Hey Joe")];
        const copySongs = clonedeep(originalSongs);
        copySongs[0].title = "All Along of the Watchtower";
        console.log(copySongs);

        expect(originalSongs[0].title).toEqual("Little Wing");
        expect(copySongs[0].title).toEqual("All Along of the Watchtower");
    });
});

class Song {
    constructor(title) {
        this.title = title;
    }
}