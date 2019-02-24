import {inject} from '@loopback/core';
import {get, param, HttpErrors} from '@loopback/rest';

import {
  CalculatorService,
  CalculatorParameters,
  AddResponse,
  MultiplyResponse,
  DivideResponse,
  SubtractResponse,
} from '../services/calculator.service';

export class CalculatorController {
  constructor(
    @inject('services.CalculatorService')
    protected calculatorService: CalculatorService,
  ) {}

  @get('/multiply/{arg0}/{arg1}')
  async multiply(
    @param.path.integer('arg0') arg0: number,
    @param.path.integer('arg1') arg1: number,
  ): Promise<MultiplyResponse> {
    return await this.calculatorService.multiply(<CalculatorParameters>{
      arg0,
      arg1,
    });
  }
  @get('/add/{arg0}/{arg1}')
  async add(
    @param.path.integer('arg0') arg0: number,
    @param.path.integer('arg1') arg1: number,
  ): Promise<AddResponse> {
    return await this.calculatorService.add(<CalculatorParameters>{
      arg0,
      arg1,
    });
  }

  @get('/subtract/{arg0}/{arg1}')
  async subtract(
    @param.path.integer('arg0') arg0: number,
    @param.path.integer('arg1') arg1: number,
  ): Promise<SubtractResponse> {
    return await this.calculatorService.subtract(<CalculatorParameters>{
      arg0,
      arg1,
    });
  }

  @get('/divide/{arg0}/{arg1}')
  async divide(
    @param.path.integer('arg0') arg0: number,
    @param.path.integer('arg1') arg1: number,
  ): Promise<DivideResponse> {
    //Preconditions
    if (arg1 === 0) {
      throw new HttpErrors.PreconditionFailed('Cannot divide by zero');
    }
    return await this.calculatorService.divide(<CalculatorParameters>{
      arg0,
      arg1,
    });
  }
}
