import { all, create } from 'mathjs'
import React, { useState } from 'react'

export function AddDynamicInput() {
  const config = {
    matrix: 'Matrix',
  }
  
  const math = create(all, config)
  const [val, setVal] = useState([])
  const [result, setResult] = useState('')

  const handleAdd = () => {
    const abc = [...val,[]]
    setVal(abc)
  }
  const handleChange = (onChangeValue, i) => {
    const inputData = [...val]
    inputData[i]=onChangeValue.target.value
    setVal(inputData)
  }

  const handleDelete  = (i) => {
    const delVal = [...val]
    delVal.splice(i,1)
    setVal(delVal)
  }

  const handleClick = () => {
    const newMatrix = val.map(row => {
      row = row.replace('[', '').replace(']', '')
      const numbers = row.split(',')
      return numbers.map(number => Number(number))
    })
    setVal(newMatrix)
    setResult(math.det(newMatrix) === 0 ? 'LD':'LI')
  }


  return (
    <>
    <button onClick={() => handleAdd()}>Add</button>
      {val.map((data,i) => {
        return (
          <div>
            <input value= {data} onChange = {e => handleChange(e, i)}/>
            <button onClick={() => handleDelete(i)}>x</button>
          </div>
        )
      })}
      <button onClick={handleClick}>LI or LD</button>
      {
      console.log(val)
      }
      <h2>Result : {result}</h2>
    </>
  )
}