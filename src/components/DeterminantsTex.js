import 'katex/dist/katex.min.css';
import { all, create } from 'mathjs';
import { BlockMath } from 'react-katex';


export default function DeterminantsTex(matrix, name) {
  const config = {
    matrix: 'Matrix',
  }
  const math = create(all, config)
  const tex = renderLatexMatrix(matrix)
  const result = math.det(matrix)
  return (
    <div>
      <BlockMath math={ name + " = " + tex} />
      <BlockMath math={"det(" + name + ") = " + result}></BlockMath>
      <hr />
    </div>
  )
}


const renderLatexMatrix = matrix => {
  return (
    "\\begin{pmatrix}\n" +
    matrix
      .map((row, index) => {
        if (index === matrix.length) return row.join(" & ") + "\n"
        else return row.join(" & ") + "\\\\\n"
      })
      .join("") +
    "\\end{pmatrix}"
  )
}