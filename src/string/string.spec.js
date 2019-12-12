describe('Name of the group', () => {
    test('should check if part of a sentence is included', () => {
        let sentence = "Le petit chat";
        expect(sentence.startsWith("Le")).toBe(true);
        expect(sentence.includes("petit")).toBe(true);
    });

    test('should check if part of a URL is included', () => {
        let url = "http://localhost:8081/customer/1";
        expect(url.includes("localhost")).toBe(true);

        if(url.includes("localhost")) {
            console.log("all good");
        }
    });
    
});