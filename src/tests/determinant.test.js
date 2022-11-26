const determinant = require('../services/determinant')

test('nule matriz', () => {
  expect(determinant([0,0,0],[0,0,0],[0,0,0])).toBe(0)
})

test('normal matrix', () => {
  expect(determinant([1,4,3],[2,-5,12],[1,9,7])).toBe(-82)
})

test('matrix with floating points', () => {
  expect(determinant([1.2,3.4,3],[4.4,0,1.2],[-6,-6.6,-3])).toBe(-57.216)
})

test('identity matrix', () => {
  expect(determinant([1,0,0],[0,1,0],[0,0,1])).toBe(1)
})

