export namespace vehicle {
  export interface Vehicle {
    id: number;
    spz: string;
    make: string;
    model: string;
    type: string;
    enginePower: string;
    engineCode: string;
    yearManufactured: string;
    vin: string;
    color: string;
    hasAircon: boolean;
    isHybrid: boolean;
    isElectric: boolean;
    aircon: Aircon;
    checks: Checks;
    hasAutomaticGearbox: boolean;
    autoGearbox: AutomaticGearbox;
    oilType: string[];
    engineOilAmount: number;
    dashDistance: number;
  }

  export interface Checks {
    stkEndDate: string;
    ekEndDate: string;
  }

  export interface AutomaticGearbox {
    automaticGearboxOilType: string[];
    automaticGearboxOilAmount: number;
  }

  export interface Aircon {
    airconCoolerType: string[];
    airconRefillAmount: number;
  }
}
