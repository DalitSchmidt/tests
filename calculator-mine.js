class Calculator {
    sum( a, b ) {
        if(typeof a !== 'number' || typeof b !== 'number')
            throw new Error('Params must be numbers')

        return a + b
    }

    subtract( a, b ) {
        if (typeof a != 'number' || typeof b != 'number')
            throw new Error('Params are not a numbers')

        return a - b
    }
}

module.exports = Calculator