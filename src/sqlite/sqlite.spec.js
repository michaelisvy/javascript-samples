const {runBatchQuery, runSelect, close} = require("./dbManager");

beforeAll(() => {
    runBatchQuery("CREATE TABLE Song (artist TEXT, title TEXT)");
    runBatchQuery("INSERT INTO Song VALUES (?,?)", "Hendrix", "Little Wing");
    runBatchQuery("INSERT INTO Song VALUES (?,?)", "Hendrix", "Hey Joe");
});

afterAll(() => {
    close();
});

it('should launch select query in database', async() => {  
    const result = await runSelect("select artist, title from Song");
    expect(result[0].artist).toBe("Hendrix");
    expect(result[0].title).toBe("Little Wing");
    expect(result[1].title).toBe("Hey Joe");
});