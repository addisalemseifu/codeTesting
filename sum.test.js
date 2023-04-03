const {stringLenght,reverseString} = require('./sum');
const calc = require('./calculator');
const capital = require('./capitalize')

test('counts the no of string', () => {
  const stringLength = stringLenght('addis');
  expect(stringLength).toBe(5)
})

test('check for enough No of srings', () => {
  const stringLength = stringLenght('sdfsdfsdfsdflelfsdjfsdfs sdfkmsdf');
  expect(stringLength).toBe('This is too small or too long')
})

// Test for reverse string

test('check if the string is reversed', () => {
  const reverseStr = reverseString('jhon');
  expect(reverseStr).toBe('nohj');
})

describe('calculator', () => {
  describe('Check Addition', () => {
    test('check if addition works properly', () => {
      const addFunction = calc.add(1,5);
      expect(addFunction).toBe(6);
    })
    test('check if addition works properly', () => {
      const addFunction = calc.add(10,5);
      expect(addFunction).toBe(15);
    })
    test('check if addition works properly', () => {
      const addFunction = calc.add(-3,3);
      expect(addFunction).toBe(0);
    })
  })

  describe('Check Subtruction', () => {
    test('check if subtruction works properly', () => {
      const subtructFunction = calc.subtuct(8,5);
      expect(subtructFunction).toBe(3);
    })
    test('check if subtruction works properly', () => {
      const subtructFunction = calc.subtuct(4,5);
      expect(subtructFunction).toBe(-1);
    })
    test('check if subtruction works properly', () => {
      const subtructFunction = calc.subtuct(2,2);
      expect(subtructFunction).toBe(0);
    })
  })

  describe('Check Division', () => {
    test('check if division works properly', () => {
      const divideFunction = calc.divide(4,4);
      expect(divideFunction).toBe(1);
    })
    test('check if division works properly', () => {
      const divideFunction = calc.divide(8,4);
      expect(divideFunction).toBe(2);
    })
    test('check if division works properly', () => {
      const divideFunction = calc.divide(15,5);
      expect(divideFunction).toBe(3);
    })
  })

  describe('Check Multiplication', () => {
    test('check if multiplication works properly', () => {
      const multiplyFunction = calc.multiply(5,5);
      expect(multiplyFunction).toBe(25);
    })
    test('check if multiplication works properly', () => {
      const multiplyFunction = calc.multiply(10,10);
      expect(multiplyFunction).toBe(100);
    })
    test('check if multiplication works properly', () => {
      const multiplyFunction = calc.multiply(1,2);
      expect(multiplyFunction).toBe(2);
    })
  })
})


// Task 4

describe('First string capitalization', () => {
  test('is the first letter caitalized', () => {
    const capitalizeFunction = capital(3);
    expect( capitalizeFunction).toBe('invalid input');
  })
})
