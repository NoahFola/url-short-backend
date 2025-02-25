const app = require("../Backend/server");
const supertest = require("supertest");
const { URL, sequelize } = require("../Backend/models/url");

afterAll(async () => {
    await sequelize.close();
}); 

describe("API endpoints", () => {
    it("Testing 404 request", async () => {
        const res = await supertest(app).get("/url/123456");
        expect(res.status).toBe(404);
    }); 

    it("Testing 200 request", async () => {
        const res = await supertest(app).get("/url/YPK342");
        expect(Boolean(res)).toBe(true);
    });
});
