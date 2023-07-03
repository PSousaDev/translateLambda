import { APIGatewayEvent } from "aws-lambda";
import Joi from "@hapi/joi";

export const paramValidatorUtil = (
  fn: Function,
  schema: Joi.ObjectSchema,
  argsType: "body" | "queryStringParameters"
) => {
  return async function (
    event: APIGatewayEvent,
    ...args: any[]
  ): Promise<{ statusCode: number; body: string }> {
    const data =
      argsType === "queryStringParameters"
        ? event[argsType]
        : JSON.parse(event[argsType] || "{}");

    const { error, value } = schema.validate(data, { abortEarly: false });

    event[argsType] = value;

    if (!error) return fn(event, ...args);

    return {
      statusCode: 422,
      body: error.message,
    };
  };
};
