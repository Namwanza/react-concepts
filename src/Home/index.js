// react
import React from 'react'

// styles
import '../App.css';

class Index extends React.Component {
    render () {
        return (
            <div className="page">
                <h1>
                    Welcome to React Concepts
                </h1>

                <div> 
                    <h2>
                        What is React?
                    </h2>
                </div>

                <p>
                    React: is an Open Source view library created and maintained by Facebook. 
                    It's a great tool to render the User Interface (UI) of modern web applications.
                </p>
                <h2>
                    In this project you will learn how to use react concepts in your project
                </h2>

                <p>Let's define some terms used in React</p>
                
                <div className="defn">
                    <h2>
                        1. A stateless functional component:
                    </h2>
                    <p>
                        Is any function you write which accepts props and returns JSX
                    </p>

                    <h2>2: A stateless component:</h2>
                    <p>
                        Is a class that extends React.Component but does not use internal state.
                    </p>

                    <h2>3: A stateful component/React component/ Component:</h2>
                    <p>Is any component that does maintain its own internal state.</p>
                </div>
            </div>
        );
    }
}

export default Index;