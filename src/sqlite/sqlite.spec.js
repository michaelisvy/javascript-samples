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
    const db = getDB();
    const result = [];
    db.serialize(function() {
        initDB(db);
        selectDB(db, selectCallback);
    });
    close();
    return result; // empty
}

function initDB(db) {
    runBatchQuery("CREATE TABLE Song (artist TEXT, title TEXT)");
    runBatchQuery("INSERT INTO Song VALUES (?,?)",["Hendrix", "Little Wing"]);
    runBatchQuery("INSERT INTO Song VALUES (?,?)",["Hendrix", "Hey Joe"]);
}

function selectDB(db, selectCallback) {
    runSelect("SELECT artist, title FROM Song", selectCallback);
}