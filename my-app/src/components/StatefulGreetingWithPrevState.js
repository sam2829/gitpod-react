import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        }, ()=>{
            // This is a callback function so doesnt log until after the set state completes
            console.log(this.state.introduction);
        });
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction}, {this.props.name} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
                <p>You've clicked {this.state.count}</p>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;