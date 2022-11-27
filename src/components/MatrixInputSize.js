import { useState } from 'react'

export function AddDynamicInput() {
  const [val, setVal] = useState([])
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
    
  }
  console.log(val, "-data")
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
    </>
  )
}