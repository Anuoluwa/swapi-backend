import supertest from 'supertest';
import app from '../src/server';

const apolloClient = async ({ ...params } = {}) => await supertest(app).post('/graphql').set('Accept', 'application/json').send(params);
export default apolloClient;
