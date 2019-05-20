import React, { Component } from 'react';

import Divider from '@material-ui/core/Divider'

import ComponentWillMount from './componentWillMount';
import ComponentDidMount from './componentDidMount'

// styles
import '../App.css';

class LifeCyle extends Component {
    render() {
        return (
            <div className="page">
                <h2>
                    1.	componentWillMount
                </h2>
                <div>
                    <ComponentWillMount />
                </div>

                <Divider />

                <h2>
                    2.	ComponentDidMount
                </h2>
                <div>
                    <ComponentDidMount />
                </div>
            </div>
        );
    }
}

export default LifeCyle;