export class ResponseHandlerUtil {
  public success(params?: {
    statusCode?: number;
    headers?: object;
    body?: string | object;
  }) {
    return {
      statusCode: params?.statusCode || 200,
      headers: params?.headers,
      body: params?.body
        ? typeof params.body === "string"
          ? params.body
          : JSON.stringify(params.body)
        : undefined,
    };
  }

  public error(params?: {
    statusCode?: number;
    headers?: object;
    body?: string | object;
  }) {
    return {
      statusCode: params?.statusCode || 500,
      headers: params?.headers,
      body: params?.body
        ? typeof params.body === "string"
          ? params.body
          : JSON.stringify(params.body)
        : "Internal Server Error",
    };
  }
}
