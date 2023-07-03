import { translateBody } from "../../@types/translateBody.type";
import { LoggerUtil } from "../../utils/logger.util";
import { ResponseHandlerUtil } from "../../utils/response-handlers.util";
import { Translate } from "@aws-sdk/client-translate";
export class TranslateService {
  constructor(
    private readonly responseHandler = new ResponseHandlerUtil(),
    private readonly logger = new LoggerUtil(TranslateService.name),
    private readonly translateClient = new Translate({
      region: process.env.AWS_REGION,
    })
  ) {}

  async trasnlateText(text: string, langToTranslate: string) {
    const params = {
      Text: text,
      SourceLanguageCode: "auto",
      TargetLanguageCode: langToTranslate,
    };

    const { TranslatedText } = await this.translateClient
      .translateText(params)
      .promisse();
    return TranslatedText;
  }
  async main(event: translateBody) {
    const { langToTranslate, text } = event.body;

    try {
      return this.responseHandler.success({ body: data });
    } catch (error) {
      this.logger.error(error.stack);
      return this.responseHandler.error();
    }
  }
}
