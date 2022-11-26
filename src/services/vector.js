import determinant from "./determinant"

export default  function lild (...matrix) {
  let dimMatrix = matrix.length
  let matrixDet = multiDimArrayCreator(dimMatrix, matrix)
  if (determinant(matrixDet) === 0 ) {
    return true
  }
  return false
}

function multiDimArrayCreator(number, matrix) {
  let matrixAll = new Array(number)
  for(let i = 0; i < number; i++) {
    matrixAll[i] = matrix[i]
  }
  return matrixAll
}

