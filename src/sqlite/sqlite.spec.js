const sqlite3 = require('sqlite3').verbose();

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
    const db = new sqlite3.Database(':memory:');
    const result = [];
    db.serialize(function() {
        initDB(db);
        selectDB(db, selectCallback);
    });
    db.close();
    return result; // empty
}

function initDB(db) {
    db.run("CREATE TABLE Song (artist TEXT, title TEXT)");
    const statement = db.prepare("INSERT INTO Song VALUES (?,?)");
    statement.run("Hendrix", "Little Wing");
    statement.run("Hendrix", "Hey Joe");
    statement.finalize();
}

function selectDB(db, selectCallback) {
    db.each("SELECT artist, title FROM Song", selectCallback);
}