// task one


const stringLength = string => {
    let myString = string.length;
   return(myString);
}


// task two

const reverseString = string => {
    let myString = string.split("").reverse().join('');
    return myString
}


// task three

class Calculator {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2
    }

    add() {
      var result = this.num1 + this.num2;
      console.log(result)
      return result;
    }
    subtract() {
       var result = this.num1 - this.num2;
       return result;
    }

    divide(){
        var result = this.num1 / this.num2;
        return result;
    }

    multiply() {
        var result = this.num1 * this.num2;
        return result;
    }
}

const object = new Calculator(20, 200);

console.log(object.add())



// task four

const capitalize = string => {
    var capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);

   return (capitalizedString);
}


// module.exports = capitalize;
module.exports = reverseString;
// module.exports = stringLength;

