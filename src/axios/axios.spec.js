const axios = require('axios');

describe('Axios test', () => {
    it('should call a get service', async () => {
        const data = await getDataUsingAxios();
        expect(data.title).toBe('delectus aut autem');
        
    });

});

async function getDataUsingAxios() {
    return (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data;
}

