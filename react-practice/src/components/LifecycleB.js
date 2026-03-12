import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Saad'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <h1>Lifecycle B</h1>
            </div>
        )
    }
}

export default LifecycleB

/*
Order of execution for Mounting Lifecycle Methods (Parent A and Child B):
1. LifecycleA constructor
2. LifecycleA getDerivedStateFromProps
3. LifecycleA render
4. LifecycleB constructor
5. LifecycleB getDerivedStateFromProps
6. LifecycleB render
7. LifecycleB componentDidMount
8. LifecycleA componentDidMount
*/

