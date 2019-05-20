import React, { Component } from 'react';

import '../App.css'; 

class MyComponent  extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeUsers: null
        };
      }
    
    componentDidMount() {
        setTimeout( () => {
          this.setState({
            activeUsers: 1273
          });
        }, 2500);
      }
    
    render() {
        return (
            <div className="page"> 
                <h1>React: Use the Lifecycle Method </h1>
                <h2>
                   Active Users: {this.state.activeUsers}
                </h2>
            </div>
        );
    }
}

export default MyComponent ;