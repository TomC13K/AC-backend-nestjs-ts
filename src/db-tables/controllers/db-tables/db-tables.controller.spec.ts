import { Test, TestingModule } from '@nestjs/testing';
import { DbTablesController } from './db-tables.controller';

describe('DbTablesController', () => {
  let controller: DbTablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbTablesController],
    }).compile();

    controller = module.get<DbTablesController>(DbTablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
