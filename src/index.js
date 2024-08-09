const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function decode(expr) {
    let arrayOfLetters = []

for (let i = 0; i < expr.length; i += 10) {
    let oneLetter = expr.slice(i, i + 10)
    arrayOfLetters.push(oneLetter)
}

let resultString = ''


for (let letter of arrayOfLetters) {
    if (letter === '**********') {
        resultString += ' '
        continue
    }

    let regExp1 = /10/g
    let regExp2 = /11/g
    let regExp3 = /0/g

    let c = letter.replace(regExp1, ".")
    let d = c.replace(regExp2, "-")
    let x = d.replace(regExp3, '')
    resultString += x
}
return resultString
}
}

module.exports = {
    decode
}
function decode(expr) {
    let arrayOfLetters = []

for (let i = 0; i < expr.length; i += 10) {
    let oneLetter = expr.slice(i, i + 10)
    arrayOfLetters.push(oneLetter)
}

let morseArray = []


for (let letter of arrayOfLetters) {
    if (letter === '**********') {
        morseArray.push(' ')
        continue
    }

    let regExp1 = /10/g
    let regExp2 = /11/g
    let regExp3 = /0/g

    let c = letter.replace(regExp1, ".")
    let d = c.replace(regExp2, "-")
    let x = d.replace(regExp3, '')
    morseArray.push(x)
}

let resultSentence = morseArray.map( (el) => {
    if (el === ' ') {
        return ' '
    }
    return MORSE_TABLE[el]
})

return resultSentence.join('')

}
