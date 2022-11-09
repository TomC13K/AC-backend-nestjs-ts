import { Test, TestingModule } from '@nestjs/testing';
import { DbTablesService } from '../../services/db-tables/db-tables.service';
import { DbTablesController } from './db-tables.controller';

describe('DbTablesController', () => {
  let dbController: DbTablesController;

  const mockService = {
    getVehicleMakesAndCreateTab: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbTablesController],
      providers:[DbTablesService]
    }).compile();

    dbController = module.get<DbTablesController>(DbTablesController);
  });

  describe('root', () => {
    it('vehicleMakesFile/:name path should return 123 ', () =>{
      mockService.getVehicleMakesAndCreateTab.mockResolvedValue(123);          // for async return otherwise use mockReturnValue
      const response = dbController.getVehicleMake("vehicle");  
      expect(response).toEqual(123);
    });
  });
});
