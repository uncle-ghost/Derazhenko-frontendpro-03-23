let numberHours = Number(prompt('Enter the number of hours:')),
    word,
    seconds

numberHours <= 1 ? word = 'hour' : word = 'hours'

if (isNaN(numberHours)) {
    alert('Please, enter a number')
} else {
    seconds = numberHours * 3600
    alert(`In ${numberHours} ${word} ${seconds} seconds`)
}