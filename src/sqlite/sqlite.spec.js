const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

it('should behave...', async (done) => {
    const result = await fullMonthy();
    done();
});

 function fullMonthy() {    
    const result = [];
    db.serialize(function() {
        db.run("CREATE TABLE Song (artist TEXT, title TEXT)");

        var stmt = db.prepare("INSERT INTO Song VALUES (?,?)");
        stmt.run("Handrix", "Little Wing");
        stmt.run("Hendrix", "Hey Joe");
        stmt.finalize();

        db.each("SELECT artist, title FROM Song", function(err, row) {
            result.push(row.artist + ": " + row.title);
        });
    });
    db.close();
    return result;
}