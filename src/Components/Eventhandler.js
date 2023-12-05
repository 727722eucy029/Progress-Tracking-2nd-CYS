import React from 'react'

const Eventhandler = () => {
    function handle(){
        alert("Welcome")
    }
  return (
    <div>
      <button onClick={handle} >Click here to see magic</button>
    </div>
  )
}

export default Eventhandler
