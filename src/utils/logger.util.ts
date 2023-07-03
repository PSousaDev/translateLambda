export class LoggerUtil {
  constructor(private readonly fileName: string) {}

  error(message: any) {
    console.error(`[${this.fileName}]`, message);
  }

  log(message: any) {
    console.log(`[${this.fileName}]`, message);
  }
}
