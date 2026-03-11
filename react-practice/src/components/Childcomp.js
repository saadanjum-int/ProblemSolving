import React from 'react'

function Childcomp(props) {
  return (
    <button onClick={props.greetHandler}>Greet-Parent</button>
  )
}

export default Childcomp