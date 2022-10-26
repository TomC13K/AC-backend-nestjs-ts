import { Test, TestingModule } from '@nestjs/testing';
import { DbTablesService } from './db-tables.service';

describe('DbTablesService', () => {
  let service: DbTablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbTablesService],
    }).compile();

    service = module.get<DbTablesService>(DbTablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
