const initiatinon = (b) => b === '{' || b === '[' || b === '(';



const finalize = (b) => {

    switch(b) {
    case '{':

      return '}';

    case '[':
      return ']';

    case '(':
      return ')';

    }
}

const validBrackets = (braces) => {

    const bStack = [];

    for (let b of braces) {

        if (initiatinon(b)) {


      bStack.push(finalize(b));

    } else {
      if (b !== bStack.pop()) return false

    }

}
  return bStack.length === 0;
}

console.log(validBrackets('[[]]'));