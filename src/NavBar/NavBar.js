import React from 'react';
import {Link}  from 'react-router-dom';

class NavBar extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/' className="nav">
                            React
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/props'  className="nav">
                            Props
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>

                    <li>
                        <Link to='/statefulcomponent'  className="nav">
                            Stateful component
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>

                    <li>
                        <Link to='/bind'  className="nav">
                            Bind
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>

                    <li>
                        <Link to='/state'  className="nav">
                            State
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>

                    <li>
                        <Link to='/lifecycle'  className="nav">
                            Lifecycle Method 
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>

                    <li>
                        <Link to='/event'  className="nav">
                            Event Listeners
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>

                    <li>
                        <Link to='/lifecyle'  className="nav">
                            Inline CSS
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>

                    <li>
                        <Link to='/lifecyle'  className="nav">
                            Arrays 
                        </Link>
                    </li>

                    <li>
                        <Link to='/'  className="nav">
                            |
                        </Link>
                    </li>

                    <li>
                        <Link to='/lifecyle'  className="nav">
                            Server  Rendering
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;