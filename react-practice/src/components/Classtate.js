import React, { Component } from "react";

class Classtate extends Component {
  constructor() {
    super();
    this.state = {
      message: 'welcome to classtate'
    };
  }

  changemessage() {
    this.setState({
      message: 'thank you for subscribing'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changemessage()}>subscribe</button>
      </div>
    );
  }
}

export default Classtate;

/*
1️⃣ Why we didn’t get an error:

- In the code, we used an arrow function in JSX:
      <button onClick={() => this.changemessage()}>subscribe</button>
- Arrow functions do not have their own 'this'.
- They automatically use the 'this' of the surrounding context (the class instance here).
- So, inside the arrow function, 'this.setState()' works fine.
- ✅ No error occurs.

2️⃣ When an error would occur:

- If we pass the function directly:
      <button onClick={this.changemessage}>subscribe</button>
- Regular functions called without an object lose their 'this'.
- In strict mode (React), 'this' becomes undefined.
- So calling 'this.setState()' throws an error:
      Cannot read properties of undefined (reading 'setState')

3️⃣ What bind() is:

- Syntax:
      this.changemessage = this.changemessage.bind(this);
- 'bind()' creates a new function with 'this' permanently set to the class instance.
- This allows you to use:
      <button onClick={this.changemessage}>subscribe</button>
  without errors.

4️⃣ Summary Table:

| Scenario                       | How 'this' behaves        | Need bind? |
|--------------------------------|--------------------------|------------|
| onClick={this.changemessage}   | undefined (error)        | ✅ Yes     |
| onClick={() => this.changemessage()} | Arrow uses surrounding 'this' | ❌ No      |
| changemessage = () => { ... }  | this auto-bound          | ❌ No      |

✅ Takeaway:

- Arrow function in JSX → 'this' works automatically.
- Direct function reference → 'this' lost unless we bind.
- bind() → explicitly locks 'this' to the class instance.
*/