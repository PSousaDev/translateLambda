import { ExamplePostModel } from "../models/example-post.model";
import { TranslateService } from "../services/translate.service";
import { paramValidatorUtil } from "../../utils/param-validator.util";

export class ExamplePostController {
  constructor(
    private readonly handler = new TranslateService(),
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
