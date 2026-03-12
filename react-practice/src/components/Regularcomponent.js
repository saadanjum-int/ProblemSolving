import React, { Component } from 'react'

export class Regularcomponent extends Component {
  render() {
    console.log('Regular Component render')
    return (
      <div>Regularcomponent {this.props.name}</div>
    )
  }
}

export default Regularcomponent

