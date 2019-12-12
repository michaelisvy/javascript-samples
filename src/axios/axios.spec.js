const axios = require('axios');

describe('Axios test', () => {
    test('should call a remote service (Get)', async () => {
        let data = await getDataUsingAxios();
        expect(data.title).toBe('delectus aut autem');
        
    });

});

async function getDataUsingAxios() {
    return (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data;
}

