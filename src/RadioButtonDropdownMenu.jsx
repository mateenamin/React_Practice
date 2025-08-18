import React from "react";
import { useState } from "react";

function RadioButtonDropdownMenu() {
  const[gender, setGender] = useState('Male');
  const [city ,setCity] = useState('Lahore');



  const GenderSelect = (event) => {
    setGender(event.target.value);
  };

  const CitySelect = (event)=>{
       setCity(event.target.value);
  }
  return (
    <div>
      {/* <h2>Select your Hobbies</h2> */}
     
      <h2>Select Gender</h2>
      <input type="radio" id="male" name="gender" onChange={GenderSelect} checked={gender == 'Male'} value={"Male"} />
      <label htmlFor="male">Male</label>

      <input type="radio" id="female" name="gender" onChange={GenderSelect} checked={gender == 'Female'}value={"Female"} />
      <label htmlFor="female">Female</label>

      <br />
     
      <h3 style={{color:"green"}}>Gender :{gender} </h3>

     
      <h3>Select Card</h3>
      
      <select name="" id="" defaultValue={'Lahore'} onChange={CitySelect}>
        <option value="Islamabad">Islamabad</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Faisalabad">Faisalabad</option>
         <option value="Rawalpindi">Rawalpindi</option>
        <option value="Multan">Multan</option>
         <option value="Peshawar">Peshawar</option>
        <option value="Quetta">Quetta</option>
      </select>
      <h3 style={{color:"green"}}>Select City Name : {city}</h3>
    </div>
  );
}

export default RadioButtonDropdownMenu;
