// const stringLength = require('./index.js');
const reverseString = require('./index.js');
// const capitalize = require('./index.js');


// test('calculate the number of character in string', () => {
//     expect(stringLength('baraka')).toBe(6);
//   });

//   test('capitalize the first character', () => {
//     expect(capitalize('baraka')).toBe('Baraka');
//   });

  test('reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
