let action = prompt('What action do you want to perform (add, sub, mult, div) ?'),
    number1,
    number2,
    addition,
    subtraction,
    multiplication,
    divide

if ( action !== 'add' && action !== 'sub' && action !== 'mult' && action !== 'div' ) {
    alert('Wrong action. Try again!')
} else {
    number1 = Number(prompt('Enter first number'))

    if ( isNaN(number1) ) {
        alert('Please, enter a number')
    } else {
        number2 = Number(prompt('Enter second number'))

        if (isNaN(number2)) {
            alert('Please, enter a number')
        } else {
            switch (action) {
                case 'add':
                    addition = number1 + number2
                    alert(`${number1} + ${number2} = ${addition}`)
                    break

                case 'sub':
                    subtraction = number1 - number2
                    alert(`${number1} - ${number2} = ${subtraction}`)
                    break

                case 'mult':
                    multiplication = number1 * number2
                    alert(`${number1} * ${number2} = ${multiplication}`)
                    break

                case 'div':
                    if ( number2 === 0 ) {
                        alert('We cannot divide by 0!')
                    } else {
                        divide = number1 / number2
                        alert(`${number1} / ${number2} = ${divide}`)
                    }
                    break
            }
        }
    }
}