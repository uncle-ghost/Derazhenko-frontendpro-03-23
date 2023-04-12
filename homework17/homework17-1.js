const array = [1, 5, 7, 'word', {name: 'Vik', age: 222}, 'another word', 33, -7]

function arithmeticMean (arr) {
    let newArr = arr.filter(function (number) {
        return !isNaN(number)
    })
    const arrLength = newArr.length

    newArr = newArr.reduce(function (sum, current) {
        return sum += current
    }, 0)

    let result = newArr / arrLength

    console.log(+result.toFixed(2))
}

arithmeticMean(array)


// 7.8
