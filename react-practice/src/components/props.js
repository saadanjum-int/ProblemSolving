import React from 'react';

const Greet = (props) => {
    console.log(props)
    return <h1>hello {props.name}</h1>
    }
export default Greet;