import DeterminantsTex from "../components/DeterminantsTex"

export default function DeterminantsExamples() {
  const matrix1 = [[1,2,3], [4,5,6], [7,8,9]]
  const matrix2 = [[232,2,34], [-4,0,32], [-7,-8,23]]
  const matrix3 = [[0,0,0], [0,0,0], [0,0,0]]
  const matrix4 = [[12,86], [.44,-99]]
  const matrix5 = [[.4,.25,-2], [1,.7,-5], [1,1,1]]

  return (
    <div>
      <h1>Ejemplos de resolucion de determinantes</h1>
      {DeterminantsTex(matrix1, 'A')}
      {DeterminantsTex(matrix2, 'B')}
      {DeterminantsTex(matrix3, 'C')}
      {DeterminantsTex(matrix4, 'D')}
      {DeterminantsTex(matrix5, 'E')}
    </div>
  )
}