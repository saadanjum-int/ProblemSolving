import { Component } from "react"
import React from "react"

class Condition extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return <div>
                <h1>welcome to conditional rendering1</h1>
            </div>
        }
        else{
            return <div>
                <h1>welcome to conditional rendering2</h1>
            </div>
        }
        
    }

}
export default Condition;