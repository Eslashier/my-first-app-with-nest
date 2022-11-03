import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMyFirstService(): string {
    return 'Esta es mi primera aplicación en Nest';
  }
}
