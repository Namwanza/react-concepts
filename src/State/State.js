import React from 'react';

// material -ui
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

// style
import '../App.css';

// component
import Ternary from './Ternary';
import Counter from './Counter';
import ControlledInput from './ControlledInput';
import PassStateAsProps from './PassStateAsProps';
import PassCallbackAsProps from './PassCallbackAsProps'

class UseStateToToggleAnElement extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            visibility: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    toggleVisibility() {
        this.setState ({
            visibility: !this.state.visibility
        })
    }

    render() {
        return(
            <div className="page ans">
                <h1>React: Use State to Toggle an Element /
                    React: Render with an If/Else Condition
                </h1>
                <div className="button"> 
                <Button 
                    variant="outlined" 
                    color="default"
                    onClick={this.toggleVisibility}
                    >
                    Click to toggle
                </Button>
            </div>

                {this.state.visibility? <p>Now you see me!</p> : <p>Am hidden</p>}

                <Divider />
                <div>
                    <Ternary />
                </div>

                {/* Counter component as a child */}
                <div className="ans">
                    <Divider />
                    <div className="ans">
                        <Counter />
                    </div>
                </div>

                <div className="ans">
                    <Divider />
                    <div className="ans">
                        <ControlledInput />
                    </div>
                </div>

                <div className="ans">
                    <Divider />
                    <div className="ans">
                        <PassStateAsProps />
                    </div>
                </div>

                <div className="ans">
                    <Divider />
                    <div className="ans">
                        <PassCallbackAsProps />
                    </div>
                </div>
            </div>
        )
    }
}

export default UseStateToToggleAnElement;