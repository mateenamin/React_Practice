import { useState } from "react";

function Toggle() {
    const [display,setDisplay] = useState(true);
  return (
       <>
  <h1>ToGgle in React (ON | OFF)</h1>
  <br/>
  <button onClick={()=>setDisplay(!display)}>Toggle</button>
  <br/>
      {
        display? <h1>Mateen Amin</h1>:null
      }

  </>
  )
}

export default Toggle;
