import { HouseListModule } from './house-list.module';

describe('HouseListModule', () => {
  let houseListModule: HouseListModule;

  beforeEach(() => {
    houseListModule = new HouseListModule();
  });

  it('should create an instance', () => {
    expect(houseListModule).toBeTruthy();
  });
});
