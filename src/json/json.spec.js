describe('Tests on Json objects', () => {
    test('should write into a JSON object', () => {         
        const song = { 
            title: "Little Wing",
            artist: "Jimi Hendrix",
            year: 1967,
            price: 5
        }         
        song.price = 0.8 * song.price; // 20% discount
        expect(song.price).toBe(4);
    });

    test('should add an attribute to a JSON object', () => {  
        const song = { 
            title: "Little Wing",
            artist: "Jimi Hendrix",
            year: 1967,
            price: 5
        }            
        song.duration = "60s"; // attribute is added to the end of the JSON object
        expect(song.duration).toBe("60s");
    });

    test('should read from a configuration file', () => {
        const config = require("./config");
        expect(config.todayIsAGoodDay).toBe(true);
    });
});