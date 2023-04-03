let number1 = Number(prompt('Enter first number')),
    number2,
    number3,
    result

if ( isNaN(number1) ) {
    alert('Please, enter a number')
} else {
    number2 = Number(prompt('Enter second number'))

    if ( isNaN(number2) ) {
        alert('Please, enter a number')
    } else {
        number3 = Number(prompt('Enter third number'))

        if ( isNaN(number3) ) {
            alert('Please, enter a number')
        } else {
            result = (number1 + number2 +number3) / 3
            alert('arithmetic mean: ' + result.toFixed(1))
        }
    }
}