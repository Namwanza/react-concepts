import React from 'react';

// import a button from material - ui
import Button from '@material-ui/core/Button';

// styles
import '../App.css';

const styles = {
    padding: 20,
}


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState ({
            counter: this.state.counter + 1
        })
    }

    decrement() {
        this.setState ({
            counter: this.state.counter - 1
        })
    }

    reset() {
        this.setState ({
            counter: 0
        })
    }

    render() {
        return (
            <div>
                <h1>React: Write a Simple Counter</h1>
                <span style={styles}>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={this.increment}
                        >
                        Increment
                    </Button>
                </span>

                <span style={styles}>
                    <Button 
                        variant="outlined" 
                        color="primary"
                        onClick={this.decrement}
                        >
                        Decrement
                    </Button>
                </span>

                <span style={styles}>
                    <Button 
                        variant="outlined" 
                        color="default"
                        onClick={this.reset}
                        >
                        Reset
                    </Button>
                </span>

                <h3 className="button">Current count is: {this.state.counter}</h3>
            </div>
        )
    }
}

export default Counter;