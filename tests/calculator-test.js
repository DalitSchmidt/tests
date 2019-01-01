const Calculator = require('./../calculator')
const calc = new Calculator()

describe('Test calculator', function () {
    it('Should add two numbers', function () {
        expect(calc.sum(1,1)).toEqual(2)
        //expect(function(){calc.sum(4,'x')}).toThrow( new Error('Params must be a numbers'))
        //expect(function(){calc.sum(4,'x')}).toThrowError(Error ,'Params must be a numbers')
        expect(function(){calc.sum(4,'x')}).toThrow()
    })

    it('Should subtract two numbers', function () {
        expect( calc.subtract(1,1) ).toEqual(0)
        expect(function() {calc.subtract(3, 'x')}).toThrow()
        //expect( calc.sum(4,'x')).toThrow()
    })

    it('Should multiply two numbers', function (){
        expect(calc.multiplication(1,1)).toEqual(1)
        expect(calc.multiplication(2,3)).toEqual(6)
        expect(calc.multiplication(1,0)).toEqual(0)
        expect(function() {calc.multiplication(3,'x')}).toThrow()
    })

    it('Should divide one number by the second number', function (){
        expect(calc.division(6,3)).toEqual(2)
        expect(function() {calc.division(6,'x')}).toThrowError(Error, 'Params must be numbers to divide')
    })
})