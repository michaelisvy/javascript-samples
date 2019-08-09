const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// we are defining a new function inside db
db.getAllAsync = function (sqlQuery) { 
    var that = this;
    return new Promise(function (resolve, reject) {
        that.all(sqlQuery, function (error, row) {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            }
        });
    });
};

function runBatchQuery(query, ...params) {
    if (params.length === 0) {
        params = [];
    }
    db.serialize(function () {
        const statement = db.prepare(query);
        statement.run(params);
        statement.finalize();
    });
}

function runSelect(query) {
    return db.getAllAsync(query);
}

function close() {
    db.close();
}

module.exports = { runBatchQuery, close, runSelect };