import React from 'react'
import { useState } from 'react'

function FormHandlingUsingControllComponent() {
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');

    const SetNameValue = (event)=>{
        setName(event.target.value)
    }
    const SetPasswordValue = (event)=>{
        setPassword(event.target.value)
    }
    const SetEmailValue = (event)=>{
        setEmail(event.target.value)
    }
    const SetPhoneValue = (event)=>{
        setPhone(event.target.value)
    }
    const ClearData = ()=>{
        setName();
        setPassword;
        setEmail;
        setPhone;
    }



  return (
    <div>
      <form action="" method="get">
        <input type="text" onChange={SetNameValue} placeholder='Enter Your Name' value={name} />
        <br />
        <br />
        <input type="password" onChange={SetPasswordValue} placeholder='Enter Your Password' value={password}  />
        <br />
        <br />
        <input type="text" onChange={SetEmailValue} placeholder='Enter Your Email' value={email} />
        <br />
        <br />
        <input type="tel" onChange={SetPhoneValue} placeholder='Enter Your Phone Number' value={phone}  />
        <br />
        <br />
        <button>Submit</button>
        <button onClick={ ClearData}>Clear</button>
      </form>
      <h1>{name }</h1>
      <h1>{password }</h1>
      <h1>{email }</h1>
      <h1>{phone }</h1>

    </div>
  )
}

export default FormHandlingUsingControllComponent
