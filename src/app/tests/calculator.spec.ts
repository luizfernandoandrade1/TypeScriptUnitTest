import { Calculator } from '../calculator.model';

describe('Calculator tests', () => {
    let calculator;
    
    beforeEach(() => {
        calculator = new Calculator(9, 5);
    });

    it('Sum test', () => {
        
        expect(calculator.sum()).toBe(14);

    });

    it('Sub test', () => {
        
        expect(calculator.sub()).toBe(4);
        
    });

    it('Mult test', () => {
        
        expect(calculator.mult()).toBe(45);
        
    });

});