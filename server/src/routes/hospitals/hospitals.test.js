const request = require("supertest");
const app = require("../../app");
const { mongoConnect,
    mongoDisconnect
} = require('../../services/mongo');
const {
    loadHospitals
} = require('../../models/hospitals.model')

describe('Load Hospital API', () => {
    // beforeAll(async () => {
    //     await mongoConnect();
    //     await loadHospitals();
    // })

    // afterAll(async () => {
    //     await mongoDisconnect();
    // })

    describe("TEST GET /hospitals", () => {
        it("It should respond with 200 success", async () => {
            const response = await request(app)
                .get("/v1/hospitals")
                .expect("Content-Type", /json/)
                .expect(200)
                .timeout(20000); // 20 seconds timeout
        })
    })
})