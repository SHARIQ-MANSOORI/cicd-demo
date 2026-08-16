import  request from "supertest"
import  app from "../server";

describe("Server Tests", () => {
  test("GET / should return success", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("CI/CD Demo Application");
  });

  test("GET /health should return OK", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });
});