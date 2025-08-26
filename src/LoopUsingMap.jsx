import React from 'react'

function LoopUsingMap() {
    const userData = [
        {
            id : 1,
            Name : "Mateen Amin",
            age : 25,
            email : "mateenamin1122@gmail.com"
        },
        {
            id : 2,
            Name : "Ali Raza",
            age : 24,
            email : "aliraza786@gmail.com"
        },
        {
            id : 3,
            Name : "Muhammad Umer",
            age : 26,
            email : "Umerdon122@gmail.com"
        },
        {
            id : 4,
            Name : "Fahad Amin",
            age : 31,
            email : "fahadamin12@gmail.com"
        },
        {
            id : 5,
            Name : "Arslan Amin",
            age : 29,
            email : "arslanamin24@gmail.com"
        }
    ]
  return (
    <div>
        <h1>Loop in JSX with Map Function</h1>
        
        <table border="1">
            <thead>
                 <tr>
                    <td>Id</td>
                 <td>Name</td>
                 <td>Age</td>
                 <td>Email</td>
                 </tr>
            </thead>
            <tbody>
         {
            userData.map((user)=>(
                 <tr key={user.id}>
                    <td>{user.id}</td>
                 <td>{user.Name}</td>
                 <td>{user.age}</td>
                 <td>{user.email}</td>
                 </tr>
            )
               
            )
         }
           </tbody> 
           
       
        </table>
      
    </div>
  )
}

export default LoopUsingMap;
