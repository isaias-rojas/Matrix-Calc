import { all, create } from 'mathjs';
import React, { useState } from 'react';


export default function Determinants() {
  const config = {
    matrix: 'Matrix',
  }
  const math = create(all, config)

  const [matrix, setMatrix] = useState('')
  const [updated, setUpdated] = useState(matrix)

  const handleChange = (event) => {
    setMatrix(event.target.value)
  }
  const handleClick = () => {
    const arrays = matrix.split(' ')
    const newMatrix = arrays.map(row => {
      row = row.replace('[', '').replace(']', '')
      const numbers = row.split(',')
      return numbers.map(number => Number(number))
    })
    setUpdated(newMatrix)
  }

  return (
    <div>
      <h1>Determinants</h1>
        <input type="text" onChange={handleChange} value= {matrix} placeholder=''/>
        <h2>Matrix: {matrix}</h2>
        <h2>Determinant: {math.det(updated)}</h2>
        <button onClick={handleClick}>Determinant</button>
        {console.log(updated)}
        {console.log(math.det(updated))}
    </div>
  )
}
