const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';

  for (let i = 0; i < expr.length; i += 10) {
    let letter = expr.slice(i, i + 10);

    let morse = '';

    if (letter === '**********') {
      result += ' ';
    } else {
      for (let j = 0; j < letter.length; j += 2) {
        let subLetter = letter.slice(j, j + 2);

        if (subLetter === '10') {
          morse += '.';
        } else if (subLetter === '11') {
          morse += '-';
        }
      }

      for (const key in MORSE_TABLE) {
        if (key === morse) {
          result += MORSE_TABLE[key];
        }
      }
    }
  }
  return result;
}

module.exports = {
  decode,
};
