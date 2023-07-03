import { ExamplePostModel } from "../models/example-post.model";
import { ExamplePostService } from "../services/example-post.service";
import { paramValidatorUtil } from "../../utils/param-validator.util";

export class ExamplePostController {
  constructor(
    private readonly handler = new ExamplePostService(),
    private readonly validator = new ExamplePostModel()
  ) {}

  main() {
    return paramValidatorUtil(
      this.handler.main.bind(this.handler),
      this.validator.validate(),
      "body"
    );
  }
}
