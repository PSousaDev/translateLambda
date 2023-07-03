import { TranslateService } from "../translate/services/translate.service";
import { ResponseHandlerUtil } from "../utils/response-handlers.util";

// Mock da classe Translate
jest.mock("@aws-sdk/client-translate", () => ({
  Translate: jest.fn().mockImplementation(() => ({
    translateText: jest.fn().mockResolvedValue({ TranslatedText: "hello" }),
  })),
}));

// Mock da classe ResponseHandlerUtil
jest.mock("../utils/response-handlers.util", () => ({
  ResponseHandlerUtil: jest.fn().mockImplementation(() => ({
    success: jest.fn().mockReturnValue({ body: "hello" }),
    error: jest.fn().mockReturnValue({}),
  })),
}));

describe("TranslateService", () => {
  let translateService: TranslateService;
  let responseHandler: ResponseHandlerUtil;

  beforeEach(() => {
    responseHandler = new ResponseHandlerUtil();
    translateService = new TranslateService(responseHandler);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("main", () => {
    it("should translate the text and return success response", async () => {
      const translateTextMock = jest.spyOn(translateService, "trasnlateText");
      const successMock = jest.spyOn(responseHandler, "success");

      const event = {
        body: {
          text: "olá",
          langToTranslate: "en",
        },
      };

      const result = await translateService.main(event);

      expect(translateTextMock).toHaveBeenCalledWith("olá", "en");
      expect(successMock).toHaveBeenCalledWith({ body: "hello" });
      expect(result).toEqual({ body: "hello" });
    });

    it("should catch errors and return error response", async () => {
      const translateTextMock = jest.spyOn(translateService, "trasnlateText");
      const errorMock = jest.spyOn(responseHandler, "error");
      const loggerErrorMock = jest.spyOn(translateService.logger, "error");

      translateTextMock.mockRejectedValueOnce(new Error("Translation failed"));

      const event = {
        body: {
          text: "olá",
          langToTranslate: "en",
        },
      };

      const result = await translateService.main(event);

      expect(translateTextMock).toHaveBeenCalledWith("olá", "en");
      expect(loggerErrorMock).toHaveBeenCalled();
      expect(errorMock).toHaveBeenCalled();
      expect(result).toEqual({});
    });
  });

  describe("trasnlateText", () => {
    it("should translate the text and return the translated text", async () => {
      const translateClientMock = translateService.translateClient;
      const translateTextMock = jest.spyOn(
        translateClientMock,
        "translateText"
      );

      const result = await translateService.trasnlateText("olá", "en");

      expect(translateTextMock).toHaveBeenCalledWith({
        Text: "olá",
        SourceLanguageCode: "auto",
        TargetLanguageCode: "en",
      });
      expect(result).toEqual("hello");
    });
  });
});
