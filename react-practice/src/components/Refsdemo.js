import React, { Component } from 'react'

/**
 * What are Refs?
 * Refs (References) in React provide a way to access DOM nodes or React elements 
 * created in the render method. 
 * 
 * Usually, in React, props are the only way for parent components to interact 
 * with their children. However, there are cases where you need to imperatively 
 * modify a child outside of the typical data flow.
 * 
 * When to use Refs:
 * 1. Managing focus, text selection, or media playback.
 * 2. Triggering imperative animations.
 * 3. Integrating with third-party DOM libraries.
 * 
 * How it works:
 * - We create a ref using 'React.createRef()'.
 * - We attach it to an element via the 'ref' attribute.
 * - We access the DOM node using 'this.inputRef.current'.
 */

class Refsdemo extends Component {
    constructor(props) {
        super(props)
        // 1. Create the reference
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        // 3. Use the reference to focus the input on page load
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        // 4. Access the value directly from the DOM node
        alert(`Input value is: ${this.inputRef.current.value}`)
    }

    render() {
        return (
            <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
                <h3>Refs Demo</h3>
                {/* 2. Attach the reference to the input element */}
                <input type="text" ref={this.inputRef} placeholder="Type something..." />
                <button onClick={this.clickHandler}>Show Value</button>
            </div>
        )
    }
}

export default Refsdemo
