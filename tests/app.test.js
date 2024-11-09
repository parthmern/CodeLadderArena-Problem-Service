const supertest = require("supertest");
const app = require("../src");

const request = supertest(app);

describe('GET /ping', () => {
    it('should return status 200 and a JSON response with the correct message', async () => {
        const response = await request.get('/ping');
        expect(response.status).toBe(200);
        // expect(response.body).toEqual({ message: 'Problem Service is alive 💚' });
        expect(response.body).toMatchObject({ message: 'Problem Service is alive 💚' });
    });
});
