import request from 'supertest';
import { expect } from 'chai';

import app from '../../app';

describe('general api testing', () => {
    it('should return 404 error if endpoint does not exist', async () => {
        const response = await request(app).get('/non-existant');

        expect(response.status).to.equal(404);
    });

    it('should return 404 if method post is used', async () => {
        const response = await request(app).post('/');

        expect(response.status).to.equal(404);
    });
});
