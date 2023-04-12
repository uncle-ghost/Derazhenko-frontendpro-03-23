function removeLetters (string, array) {
    string = string.split('')

    for (let i = 0; i < array.length; i++) {
        let letter = array[i]

        string.map((value) => {
            value = string.indexOf(letter)
            if (value >= 0) {
                string.splice(value, 1)
            }
        })
    }

    return string.join('')
}

let result = removeLetters("hello world", ['l', 'd'])
console.log(result)

// heo wor
