const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

function getDB() {
    return db;
}

function runBatchQuery(query, paramsArray) {
    db.serialize(function () {
        const statement = db.prepare(query);
        statement.run(paramsArray);
        statement.finalize();
    });
}

function runSelect(query, callback) {
    db.serialize(function () {
        db.each(query, callback);
    });
}


function close() {
    db.close();
}

module.exports = { getDB, runBatchQuery, close, runSelect };