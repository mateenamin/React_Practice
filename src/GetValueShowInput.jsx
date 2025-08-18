import React from 'react'
import { useState } from 'react'

function GetValueShowInput() {
    const [text , setText] = useState(null);

    const GetText = (event)=>{
        setText(event.target.value);
    }
  return (
    <div style={{margin:"20px", padding:"20px"}}>
      <h2>Input Box Data</h2>

      <h1>{text}</h1>

      <input type="text" onChange={GetText } value={text} placeholder='Enter Your Name' style={{margin:"20px", }}/>
      <br  />
      <button onClick={()=> setText("")}>Reset</button>

    </div>
  )
}

export default GetValueShowInput
