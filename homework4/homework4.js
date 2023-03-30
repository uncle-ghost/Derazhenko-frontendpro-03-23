let number1 = Number(prompt('Enter first number')),
    number2

if ( isNaN(number1) ) {
    alert('Please, enter a number')
} else {
    number2 = Number(prompt('Enter second number'))

    let addition = number1 + number2,
        subtraction = number1 - number2,
        multiplication = number1 * number2,
        divide = number1 / number2

    if ( isNaN(number2) ) {
        alert('Please, enter a number')
    } else if (number2 === 0) {
        alert(
            `User enters the numbers ${number1} and ${number2}
            ${number1} + ${number2} = ${addition}
            ${number1} - ${number2} = ${subtraction}
            ${number1} * ${number2} = ${multiplication}
            We cannot divide by 0!`
        )
    } else {
        alert(
            `User enters the numbers ${number1} and ${number2}
            ${number1} + ${number2} = ${addition}
            ${number1} - ${number2} = ${subtraction}
            ${number1} * ${number2} = ${multiplication}
            ${number1} / ${number2} = ${divide}`
        )
    }
}