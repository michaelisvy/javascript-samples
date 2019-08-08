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

function runSelect(query) {
    return db.getAllAsync(query);
}

// we are defining a new function inside db
db.getAllAsync = function (sql) { 
    var that = this;
    return new Promise(function (resolve, reject) {
        that.all(sql, function (err, row) {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};

function close() {
    db.close();
}

module.exports = { getDB, runBatchQuery, close, runSelect };