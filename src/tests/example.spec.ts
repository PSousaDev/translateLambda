import { post } from "../translate/handler";

import { APIGatewayEvent } from "aws-lambda";
import examplePostMock from "./mocks/example-post.mock.json";

describe("Example Module", () => {
  test("Post", async () => {
    const event = { body: JSON.stringify(examplePostMock) } as APIGatewayEvent;

    const result = await post(event);

    expect(result.statusCode).toEqual(200);
  });
});
