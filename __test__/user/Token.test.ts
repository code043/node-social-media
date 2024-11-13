import { Token } from "../../src/application/services/token/user-token";

test("should validate a token", async () => {
  const tokenValidate = new Token();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoyMCwiaWF0IjoxNzMxNTI5ODk2LCJleHAiOjE3MzE2MTYyOTZ9.cKSCxE3SzOWUyv3fX4OG8xfZgQZnR_mZCqY8Je5ek6k";
  const data = tokenValidate.validate(token);
  expect(data).not.toBeUndefined();
});
