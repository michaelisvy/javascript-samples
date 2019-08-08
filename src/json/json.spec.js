describe('Tests on Json objects', () => {

    test('should write into a JSON object (JavaScript syntax)', () => {
        let song = { title: "Little Wing",
                    artist: "Jimi Hendrix",
                    year: 1967,
                    price: 5
        }      
        song.price = 0.8 * song.price; // 20% discount

        expect(song.price).toBe(4);
        
    });
    
});