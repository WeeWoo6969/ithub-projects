

const word = prompt('Your word')

const wordLength = Number(word.length)
const root = Math.sqrt(wordLength)
if (Number.isInteger(root)) {
    result = 1
} else {
    result = 0  
}
console.log(result)