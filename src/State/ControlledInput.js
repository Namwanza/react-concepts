import React from 'react';

const inputStyle = {
    width: 355,
    margin: 5,
    height: 80,
    border: '2px solid blue',
    borderRadius: 10,
}

class ControlledInput extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            input: ''
        }

        this.handleInputs = this.handleInputs.bind(this)
    }

    handleInputs(event) {
        this.setState ({
            input: event.target.value
        })
    }

    render () {
        return(
            <div>
                <h1>React: Create a Controlled Input</h1>
                <input 
                    type='text' 
                    value={this.state.input} 
                    style={inputStyle}
                    placeholder="try to type in some text and see!"
                    onChange={this.handleInputs}
                />

                <h1>{this.state.input}</h1>
            </div>
        )
    }
}

export default ControlledInput;