import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Saad'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <LifecycleB />
                <h1>Lifecycle A</h1>
            </div>
        )
    }
}

export default LifecycleA

/*
Order of execution for Mounting Lifecycle Methods:
1. constructor
2. static getDerivedStateFromProps
3. render
4. componentDidMount
*/