import {
  CalculatorService,
  CalculatorParameters,
} from '../../../services/calculator.service';
import {CalculatorServiceProvider} from '../../../services/calculator.service';
import {givenAConnectedDataSource} from '../../helpers';

import {expect} from '@loopback/testlab';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;

  before(givenACalculatorService);

  it('adds two numbers', async () => {
    const response = await calculatorService.add(<CalculatorParameters>{
      arg0: 50,
      arg1: 2,
    });
    expect(response.result.return).to.deepEqual(52);
  });

  it('subtracts two numbers', async () => {
    const response = await calculatorService.subtract(<CalculatorParameters>{
      arg0: 40,
      arg1: 20,
    });
    expect(response.result.return).to.deepEqual(20);
  });

  it('multiplies two numbers', async () => {
    const response = await calculatorService.multiply(<CalculatorParameters>{
      arg0: 50,
      arg1: 2,
    });
    expect(response.result.return).to.deepEqual(100);
  });

  it('divides two numbers', async () => {
    const response = await calculatorService.divide(<CalculatorParameters>{
      arg0: 100,
      arg1: 4,
    });
    expect(response.result.return).to.deepEqual(25);
  });

  async function givenACalculatorService() {
    let calculatorDataSource = await givenAConnectedDataSource();
    calculatorService = await new CalculatorServiceProvider(
      calculatorDataSource,
    ).value();
  }
});
