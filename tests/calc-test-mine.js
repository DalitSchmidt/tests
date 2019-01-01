const Calculator = require('./../calculator')
const calc = new Calculator()

describe('Calculator test', () => {
    it('Should add two numbers', () => {
        expect(calc.sum(4,2)).toEqual(6)
        expect(calc.sum(1,'x').toThrow())
    })
     it('Should return error', () => {
         expect(calc.subtract(4,3).toEqual(8))
         expect(calc.subtract(1,'x')).toThrow()
     })
})