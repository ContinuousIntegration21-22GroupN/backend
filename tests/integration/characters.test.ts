import request from "supertest";
import { expect } from "chai";

import app from "../../app";

describe("test characters endpoint", () => {
  describe("GET /characters", () => {
    it("should return the list of all characters", async () => {
      const response = await request(app).get("/characters");

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array");
      expect(response.body).to.have.length(16);
    });
  });

  describe("GET /character", () => {
    it("should characters with id 1", async () => {
      const response = await request(app).get("/characters/1");

      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("object");
      expect(response.body).to.have.property("id", "1");
    });

    it("should return 404 error when requested id does not exist", async () => {
      const response = await request(app).get("/characters/100");

      expect(response.status).to.equal(404);
      expect(response.body).to.have.property("error", "Character not found");
    });
  });
});
