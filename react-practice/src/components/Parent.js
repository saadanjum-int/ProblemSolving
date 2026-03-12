import React, { Component } from 'react'

/**
 * Regular Component vs Pure Component
 * 
 * 1. Regular Component:
 *    - A regular component does not implement the 'shouldComponentUpdate' lifecycle method.
 *    - It always re-renders whenever its parent component re-renders, regardless of whether 
 *      its props or state have changed.
 *    - In this demo, you'll see "Regular Component render" in the console every 2 seconds.
 * 
 * 2. Pure Component:
 *    - A pure component implements 'shouldComponentUpdate' with a shallow comparison 
 *      of props and state.
 *    - It only re-renders if it detects a change in props or state.
 *    - Since we are setting the state to the exact same value ('Saad') every 2 seconds, 
 *      the shallow comparison finds no change, and the Pure Component skips re-rendering.
 *    - You'll see "Pure Component render" only once (on initial load).
 * 
 * Performance Tip: Use PureComponents to avoid unnecessary re-renders and improve performance,
 * but be careful with nested objects/arrays as shallow comparison might not detect deep changes.
 */
import Regularcomponent from './Regularcomponent'
import Purecomponent from './Purecomponent'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Saad'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Saad'
            })
        }, 2000)
    }

    render() {
        console.log('*****************Parent Component render*****************')
        return (
            <div>
                Parent Component
                <Regularcomponent name={this.state.name} />
                <Purecomponent name={this.state.name} />
            </div>
        )
    }
}

export default Parent
