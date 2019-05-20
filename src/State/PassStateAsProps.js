import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <h1>
                    React: Pass State as Props to Child Components
                </h1>
                <p>Hello, my name is : {this.props.name}</p>
            </div>
        );
    }
}

class PassStateAsProps extends Component {
    constructor(props) {
        super (props);
        this.state = {
            name: 'Ronald Namwanza'
        }
    }
    render() {
        return (
            <div>
                <NavBar name={this.state.name}/>
            </div>
        );
    }
}

export default PassStateAsProps;