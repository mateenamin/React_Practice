import { useState } from "react";

function StateFuncation(){

    //  let city = "Karachi";

    //  let ChangeCity = ()=>{
    //       city = "Lahore";
    //       console.log(city);   // only console.log show the change city but not show on Screen thats why iam using State
          
          
    //  }


    // const [city,setCity] = useState("Karachi");

    const [counter, setCounter] = useState(1);

    const changeCounter = ()=>{
        setCounter (counter+1);
    }


   return(
    <>
    <h1>State Practice using Funcation Component in React</h1>

 

        <h1>Counter : {counter}</h1>

        <button onClick={changeCounter}>Plus</button>

         



    </>
   )
}

export default StateFuncation;


       /*  change the city Name using State */

        /* <h1>{city}</h1>

        <button onClick={()=> setCity("Lahore")}>City Name</button> */

        /* next example show the screen of counter using State */