import React, { useState } from 'react'

const controlComponent = () => {
    const [name,setname] = useState("")
    console.log(name,"name")
  return (
    <div>
        <input 
        type='text'
        value={name}
        onChange={(e)=>setname(e.target.value)}></input>
      
    </div>
  )
}

export default controlComponent
