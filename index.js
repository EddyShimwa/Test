// task one
const stringLength = (string) => {
    const lengthOfString= string.length;
    if (lengthOfString > 0 && lengthOfString < 10) {
      return lengthOfString;
    }
    throw new Error('String length should not exceed 10 characters');
  };

// task two

const reverseString = string => {
    let myString = string.split("").reverse().join('');
    return myString
}


// task three
class Calculator {
    static add(a, b) {
     return a + b
    }
    static subtract(a, b) {
      return a - b
    }

    static divide(a, b){
       return a / b;
    }

    static multiply(a, b) {
        return a * b
    }
}

// task four
const capitalize = string => {
    var capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
   return (capitalizedString);
}

module.exports = { stringLength, reverseString, Calculator, capitalize };