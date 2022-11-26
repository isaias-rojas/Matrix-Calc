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
  console.log(val, "-data")
  return (
    <>
    <button onClick={() => handleAdd()}>Add</button>
      {val.map((data,i) => {
        return (
          <div>
            <input onChange = {e => handleChange(e, i)}/>
            <button>x</button>
          </div>
        )
      })}
    </>
  )
}