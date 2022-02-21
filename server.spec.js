/**
 * The Adam BC:
 * The Adam Blockchain Computer.
 * TESTING ENGINE:
 * 
 */

const app = require('./server'); // Fetch APIs
const supertest = require('supertest');
const request = supertest(app);

describe('Testing Adam BC running mode', () => {

    test('GET /stop Adam BC stopped successfully', async () => {
        
        // Get /stop endpoint
        const response = await request.get(`/stop`);
        
        expect(response.status).toBe(200);
        
    });

    test('GET /done Adam BC task completed successfully', async () => {
        
        // Get /done endpoint
        const response = await request.get(`/done`);
        
        expect(response.status).toBe(200);
        
    });

});

describe('Testing Adam BC configuration settings', () => {

    test('GET /configs Adam BC configurations', async () => {
        
        // Get /configs endpoint
        const response = await request.get(`/configs`);
        
        expect(response.status).toBe(200);
        
    });

});


describe('Testing Adam BC peer configuration settings', () => {

    test('GET /peers/join Adam BC add new peer member', async () => {
        
        // Get /peer/join endpoint
        const response = await request.get(`/peers/join`);
        
        expect(response.status).toBe(200);
        
    });

    test('GET /peers/join/admin Adam BC add new peer admin', async () => {
        
        // Get /peer/join/admin endpoint
        const response = await request.get(`/peers/join/admin`);
        
        expect(response.status).toBe(200);
        
    });

    test('GET /peers Adam BC list peers in a network', async () => {
        
        // Get /peers endpoint
        const response = await request.get(`/peers`);
        
        expect(response.status).toBe(200);
        //expect(Array.isArray(response.body)).toBeTruthy();
        //expect(response.body).toHaveProperty("admin");
        //expect(response.body).toHaveProperty("peers");
        
    });

});

describe('Testing Adam BC live data authenticity', () => {

    test('GET /data Adam BC live custom data', async () => {
        
        // Get /peers endpoint
        const response = await request.get(`/data`);
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        //expect(response.body[0]).toHaveProperty("builderID");
        //expect(response.body[0]).toHaveProperty("TaskID");
        //expect(response.body[0]).toHaveProperty("oPartition");
        //expect(response.body[0]).toHaveProperty("xPartition");
        //expect(response.body[0]).toHaveProperty("uParams");
        
    });

    test('GET /peers/data Adam BC live peer data', async () => {
        
        // Get /peers/data endpoint
        const response = await request.get(`/peers/data`);
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        //expect(response.body[0]).toHaveProperty("builderID");
        //expect(response.body[0]).toHaveProperty("TaskID");
        //expect(response.body[0]).toHaveProperty("oPartition");
        //expect(response.body[0]).toHaveProperty("xPartition");
        //expect(response.body[0]).toHaveProperty("uParams");
        
    });

});

