import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";


function App() {
  const[column , setColumn]= useState([])
  const[records, setRecords] = useState ([])
  
    useEffect(() => {
      fetch('http://localhost:5173/Data.json')
      .then( res => res.json())
      .then ( data=> {
         setColumn(Object.keys(data.users[0])) 
         setRecords(data.users)
      })
    }, [])
    return(
    <div>
       <table className="table">
         <thead>
            <tr>
              {column.map((c,i)=>(
                <th key={i}>{c}</th>
              ))}
            </tr>
         </thead>
         <tbody>
            {
              records.map((record, i) =>(
                <tr key={i}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                </tr>
              ))  
            }
         </tbody>
       </table>
     </div>
  );
}

export default App
