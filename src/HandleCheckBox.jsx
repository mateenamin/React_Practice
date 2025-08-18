import React from "react";
import { useState } from "react";

function HandleCheckBox() {
  const [hobby, setHobby] = useState([]);

  const hobbies = (event) => {
    // console.log(event.target.value , event.target.checked);
    if (event.target.checked) {
      setHobby([...hobby, event.target.value]);
    } else {
      setHobby([
        ...hobby.filter((value) => {
          value != event.target.value;
        }),
      ]);
    }
  };

  return (
    <div>
      <h2>Select your Hobbies</h2>
      <br />
      <input type="checkbox" onChange={hobbies} id="HTML" value="HTML" />
      <label htmlFor="HTML">HTML</label>
      <br />
      <br />
      <input type="checkbox" onChange={hobbies} id="CSS" value="CSS" />
      <label htmlFor="CSS">CSS</label>
      <br />
      <br />
      <input type="checkbox" onChange={hobbies} id="JS" value="JS" />
      <label htmlFor="JS">JavaScript</label>
      <br />
      <br />
      <input type="checkbox" onChange={hobbies} id="react" value="react" />
      <label htmlFor="react">React</label>
      <br />
      <br />
      <h1>{hobby.toString()}</h1>
    </div>
  );
}

export default HandleCheckBox;
