import React, { PureComponent } from "react";

class Purecomponent extends PureComponent {
    render() {
        console.log('Pure Component render')
        return <div>Purecomponent {this.props.name}</div>
    }
}
export default Purecomponent;