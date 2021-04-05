import React, { useState } from "react"

export const PropsAndState = ({ yourName, pet }) => {

    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
      //good practice:
      //make a copy of state, modify it, and then setState to the copy
      const newCountClicks = ++countClicks
      setCountClicks(newCountClicks)
    }

  return (
    <>
    {console.log("In the return")}
      <h3>Welcome, {yourName} </h3>
      <h3>My Pet Is: {pet}</h3>
      
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}