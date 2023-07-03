import Joi from "@hapi/joi";

export class ExamplePostModel {
  public validate() {
    return Joi.object({
      text: Joi.string().max(100).min(2).required(),
      langToTranslate: Joi.string().max(100).min(2).required(),
    });
  }
}
