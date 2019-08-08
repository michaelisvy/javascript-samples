const {getDB,  runBatchQuery, close, runSelect} = require("./dbManager")

it('should launch select query in database', () => {
    const selectCallback = function(error, row) {
        expect(row.artist).toEqual("Hendrix"); 
        if(error) {
            console.log("error");
        }
    }
    fullMonty(selectCallback);
});

function fullMonty(selectCallback) {    
    initDB();
    selectDB(selectCallback);
    close();
}

function initDB() {
    runBatchQuery("CREATE TABLE Song (artist TEXT, title TEXT)");
    runBatchQuery("INSERT INTO Song VALUES (?,?)",["Hendrix", "Little Wing"]);
    runBatchQuery("INSERT INTO Song VALUES (?,?)",["Hendrix", "Hey Joe"]);
}

function selectDB(selectCallback) {
    runSelect("SELECT artist, title FROM Song", selectCallback);
}