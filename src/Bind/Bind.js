import React from 'react';

// material ui
import Button from '@material-ui/core/Button';

// style
import '../App.css';

class BindThisToAclassComponent extends React.Component {
    constructor (props) {
        super(props);
        // initialize state
        this.state = {
            itemCount: 0,
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem() {
        this.setState({
            itemCount: this.state.itemCount + 1
        })
    }

    render () {
        return(
            <div className="ans">
                <h1>React: Bind 'this' to a Class Method</h1>
                
                <div className="button">
                    <Button variant="outlined" color="secondary" 
                        onClick={this.addItem}>
                        Click Me
                    </Button>
                </div>
                <h3>Current item count is: {this.state.itemCount}</h3>
            </div>
        )
    }
}

export default BindThisToAclassComponent;