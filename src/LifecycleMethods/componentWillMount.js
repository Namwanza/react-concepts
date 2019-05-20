import React, { Component } from 'react';

import '../App.css'; 

class componentwillMount extends Component {
    componentWillMount() {
        console.log("Hey this is Ronald Namwanza, am happy to be a software Engineer")
    }

    render() {
        return (
            <div className="page"> 
                <h1>React: Use the Lifecycle Method </h1>
                <p className="cycle">
                    The componentWillMount() method is called before the render() method when a component is being mounted to the DOM.
                </p>
                <h3>Here is a list of some of the main lifecycle methods:</h3>
                <p className="cycle"> 
                    componentWillMount()
                </p>
                <p className="cycle">
                    componentDidMount()  Use componentDidMount when you want to set something up  
                </p>
                <p className="cycle">
                    componentWillReceiveProps()
                </p>
                <p className="cycle">
                    shouldComponentUpdate()
                </p>
                <p className="cycle">
                    componentWillUpdate()
                </p>
                <p className="cycle">
                    componentDidUpdate()
                </p>
                <p className="cycle">
                    componentWillUnmount()  Use componentWillUnmount when you need to clear that something, your event listener.
                </p>
            </div>
        );
    }
}

export default componentwillMount;