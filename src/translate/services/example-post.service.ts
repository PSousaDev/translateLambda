import { LoggerUtil } from "../../utils/logger.util";
import { ResponseHandlerUtil } from "../../utils/response-handlers.util";

export class ExamplePostService {
  constructor(
    private readonly responseHandler = new ResponseHandlerUtil(),
    private readonly logger = new LoggerUtil(ExamplePostService.name)
  ) {}

  async main(event: any) {
    try {
      const data = event.body;
      return this.responseHandler.success({ body: data });
    } catch (error) {
      this.logger.error(error.stack);
      return this.responseHandler.error();
    }
  }
}
