const app = require("../src/app");
const request = require("supertest");
const agent = request(app);

describe("test ed RUTAS", () => {
  describe("GET/rickandmorty/character/:id", () => {
    it("Responde con status:200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });
  });
});
