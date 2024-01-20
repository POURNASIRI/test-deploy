import React, { useState } from 'react'

export default function AddNew() {

    const[input,setInput] = useState('')
    const [info,setInfo] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!input) return
        const newInput = {
            date: new Date().toISOString(),
            description: input,
            category: 'Uncategorized',
            amount:Math.floor(Math.random() * 1000)
        }
        setInfo([...info,newInput])
        

         fetch ('https://json-server-s6rb.onrender.com/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            ,body: JSON.stringify(newInput)
        })
        .then(response => response.json())
        .then(data => {
          console.log('New cellphone added:', data);
          // Perform any additional actions or updates as needed
        })
        .catch(error => {
          console.error('Error:', error);
        });
  
        setInput("")
    }






    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input
        onChange={e=>setInput(e.target.value)} 
        type="text" value={input}
         />
         <button>submit</button>
    </form>
   
    </>
  )
}
