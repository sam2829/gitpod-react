import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {

  constructor(props) {
    console.log('Child Constructor called')
    super(props)
  
    this.state = {
       greeting: 'Hello!'
    }
  }

  updateGreeting = () => {
    console.log('Child update greeting called')
    this.setState(prevState => {
        return {
            greeting: prevState.greeting === 'Hello!' ? 'Goodbye' : 'Hello!'
        }
    })
  }

  componentDidUpdate() {
    console.log('Child Component updated')
  }

  render() {
    console.log('Child render method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
      </div>
    )
  }
}

export default LifeCyclesCDUChild