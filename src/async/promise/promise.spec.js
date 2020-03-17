

it('should await promise', async () => {
    const result = await promiseSomething("Sam");
    expect(result).toBe("hello Sam");
});

it('should promise then', async () => {
    const result = await promiseSomething("Sam").then(
        function(result) {
            expect(result).toBe("hello Sam")
        }
    );
});

function promiseSomething(name) {
    return new Promise(function (resolve, reject) {
        resolve("hello " + name);
    });
}