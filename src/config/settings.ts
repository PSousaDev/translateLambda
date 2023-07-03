import env from "env-var";
import qaEnv from "./env.qa.json";

export const settings = !(process.env.NODE_ENV === "test")
  ? {
      NODE_ENV: env.get("NODE_ENV").required().asString(),
      Region: env.get("Region").required().asString(),
    }
  : { ...qaEnv };
