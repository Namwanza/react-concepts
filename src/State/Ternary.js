// Conditional Rendering Using Ternary Expression

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const inputStyle = {
    width: 255,
    margin: 5,
    height: 80,
    border: '2px solid blue',
    borderRadius: 10,
}

class ConditionalRenderingUsingTernaryExpression extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            input: '',
            userAge: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this)
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: ''
        })
    }

    submit() {
        this.setState({
            userAge: this.state.input
        })
    }

    render () {
        const buttonOne = 
            <Button variant="contained" onClick={this.submit}>
                Submit
            </Button>

        const buttonTwo = 
        <Button variant="outlined" color="secondary">
            You're old enough
        </Button>

        const buttonThree = 
        <Button variant="outlined" color="primary">
            You're too younger
        </Button>
        return(
            <div>
                <h1>React: Use a Ternary Expression for Conditional Rendering</h1>
                <p>condition ? expressionIfTrue : expressionIfFalse</p>

                <div>
                    <p>
                        set up a ternary expression that implements the following logic: when the page first loads, render the submit button, buttonOne, to the page. Then, when a user enters their age and clicks the button, render a different button based on the age. If a user enters a number less than 18, render buttonThree. If a user enters a number greater than or equal to 18, render buttonTwo.
                    </p>

                    <TextField 
                        style={inputStyle}
                        type="number"
                        placeholder="Enter your age here"
                        value={this.state.input}
                        onChange={this.handleChange}
                    /> <br />
                    
                    {(this.state.userAge >= 18)? buttonTwo: (this.state.userAge === '')? buttonOne: buttonThree}
                </div>
            </div>
        )
    }
}

export default ConditionalRenderingUsingTernaryExpression;