import React, { useState } from 'react'
import { useEffect } from 'react'
import AddNew from './AddNew'

export default function App() {
        const[info,setInfo] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  console.log(info)
 function fetchData () {
      fetch('https://json-server-s6rb.onrender.com/transactions') // Replace with your JSON server endpoint
      .then(response => response.json())
      .then(data => {
        setInfo(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  const handleDelete =  (id)=>{
   fetch(`https://json-server-s6rb.onrender.com/transactions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id})
    })

    setInfo(info.filter(item=>item.id !== id))
  }

  return (
    <div>
      {
        info.map(item=>(
          <div key={item.id}>
            <p >{item.description}</p>
            <button
            onClick={()=>handleDelete(item.id)}
            >Delete</button>
          </div>
        ))
      }

      <AddNew/>        
    </div>
  )
}
