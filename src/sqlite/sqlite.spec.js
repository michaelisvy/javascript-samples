const {runBatchQuery, close, runSelect} = require("./dbManager")

beforeAll(() => {
    runBatchQuery("CREATE TABLE Song (artist TEXT, title TEXT)");
    runBatchQuery("INSERT INTO Song VALUES (?,?)",["Hendrix", "Little Wing"]);
    runBatchQuery("INSERT INTO Song VALUES (?,?)",["Hendrix", "Hey Joe"]);
});

afterAll(() => {
    close();
});

it('should launch select query in database', () => {
    const selectCallback = function(error, row) {
        expect(row.artist).toEqual("Hendrix"); 
        if(error) {
            console.log("error");
        }
    }
    runSelect("SELECT artist, title FROM Song", selectCallback);
});