import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  const mockService = {
    getHello: jest.fn()
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).overrideProvider(AppService)
      .useValue(mockService)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      mockService.getHello.mockReturnValue("Hello World!");          // for async return otherwise use mockReturnValue
      const response = appController.getHello();  
      expect(response).toEqual('Hello World!');
    });
  });
});
