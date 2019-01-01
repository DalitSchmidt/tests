class Calculator {
    sum( a, b ) {
        if (typeof a != 'number' || typeof b != 'number')
            throw new Error('Params must be numbers')

        return a + b
    }

    subtract( a, b ) {
        if (typeof a != 'number' || typeof b != 'number')
            throw new Error('Params are not a number')

        return a - b
    }

    multiplication( a, b ) {
        if(typeof a != 'number' || typeof b!= 'number')
            throw new Error('Params must be number to multiply')

        return a * b
    }

    division( a, b ){
        if(typeof a != 'number' || typeof b != 'number')
            throw new Error('Params must be numbers to divide')

        return a / b
    }
}

module.exports = Calculator