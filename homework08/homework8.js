let year = Number(prompt('Enter the year')),
    city,
    sport

if ( isNaN(year) ) {
    alert('Please, enter a year')
} else if ( year === 0 ) {
    alert('It is a pity that you did not want to enter the year')
} else {
    city = prompt('Enter the city')

    if ( !isNaN(+city) ) {
        alert('It is a pity that you did not want to enter the city')
    } else {
        sport = (prompt('Enter kind of sport'))

        if ( !isNaN(+sport) ) {
            alert('It is a pity that you did not want to enter kind of sport')
        } else {
            let age = 2023 - year

            switch (city) {
                case 'Kiev':
                    city = 'You live in the capital of Ukraine'
                    break
                case 'Washington':
                    city = 'You live in the capital of USA'
                    break
                case 'London':
                    city = 'You live in the capital of Great Britain'
                    break
                default:
                    city = 'You live in the ' + city
            }

            switch (sport) {
                case 'football':
                    sport = 'Cool! Do you want to become like Andriy Shevchenko?'
                    break
                case 'basketball':
                    sport = 'Cool! Do you want to become like Michael Jordan?'
                    break
                case 'hockey':
                    sport = 'Cool! Do you want to become like Wayne Gretzky?'
                    break
                default:
                    sport = 'Good choice of sport'
            }

            alert(`
            Your age: ${age}
            ${city}
            ${sport}
            `)
        }
    }
}