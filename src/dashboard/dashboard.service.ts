import {Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DashboardService {
  
  @Inject(ConfigService)
  public config: ConfigService;

  showBookings(): string {
    const host:string = this.config.get('DB_HOST');
    return 'lala host is ' + host;
  }
}
