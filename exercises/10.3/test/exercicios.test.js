const sum = require('../ex1')
const myIndexOf = require('../ex2')
const mySum = require('../ex3')
const myRemove = require('../ex4')
const myRemoveWithoutCopy = require('../ex5')
const myFizzBuzz = require('../ex6')

test('soma 1 e 2 para dar 3', () => {
  expect(sum(4, 5)).toBe(9)
  expect(sum(0, 0)).toBe(0)
  expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'))
})

test('procura o index do elemento', () => {
  expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2)
  expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1)
})

test('retorna soma do array', () => {
  expect(mySum([1, 2, 3, 4])).toBe(10)
  expect(mySum([1, -2, -3, 4])).toBe(0)
})

test('array retorna sem o elemento', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4])
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
})

test('retorna o mesmo array sem o elemento', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1,2,4])
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4])
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
})

test('fizzbuzz!', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz')
  expect(myFizzBuzz(3)).toBe('fizz')
  expect(myFizzBuzz(5)).toBe('buzz')
  expect(myFizzBuzz(4)).toBe(4)
  expect(myFizzBuzz('')).toBe(false)
})