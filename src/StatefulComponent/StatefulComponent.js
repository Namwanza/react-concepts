import React from 'react';

class StatefulComponent extends React.Component {
    constructor (props) {
        super (props);
        // initialize state 
        this.state = {
            name: 'Ronald Namwanza'
        }
    }

    render () {
        return (
            <div>
                <h1>React: Create a Stateful Component</h1>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default StatefulComponent;