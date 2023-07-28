import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);

  // constructor() {}

  async bill(data: any) {
    this.logger.log('Billing... ', data);
  }
}
