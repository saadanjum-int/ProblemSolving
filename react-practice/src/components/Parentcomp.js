import React, { Component } from "react";
import Childcomp from "./Childcomp";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
       parentname: 'parent'

    };
  
  this.greetparent=this.greetparent.bind(this);
}
  greetparent(){
    alert(`hello ${this.state.parentname}`)

  }
  
  render() {
    return (
      <div>
       <Childcomp greetHandler={this.greetparent}/>
      </div>
    );
  }
}

export default Parent;
