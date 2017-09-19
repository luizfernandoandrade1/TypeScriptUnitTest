export class Calculator {
    valueA: Number;
    valueB: Number;

    constructor (valueA: Number, valueB: Number) {
        this.valueA = valueA;
        this.valueB = valueB;
    }

    sum() {
        return +this.valueA + +this.valueB;
    }

    sub() {
        return +this.valueA - +this.valueB;
    }

    mult() {
        return +this.valueA * +this.valueB;
    }
}