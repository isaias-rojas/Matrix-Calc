import { all, create } from 'mathjs'

const config = {
  matrix: 'Matrix',
}
const math = create(all, config)

export default function determinant(matrix) {
  if (matrix[0].length === 3) {
    let plus = (matrix[0][0]* matrix[1][1] * matrix[2][2]) + (matrix[1][0]* matrix[2][1] * matrix[0][2]) + (matrix[2][0]* matrix[0][1] * matrix[1][2])
    let minus = (matrix[0][2]* matrix[1][1] * matrix[2][0]) + (matrix[1][2]* matrix[2][1] * matrix[0][0]) + (matrix[2][2]* matrix[0][1] * matrix[1][0])
    return plus-minus;
  } return math.det(matrix);
}
