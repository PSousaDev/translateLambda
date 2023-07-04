import { PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: any) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}
