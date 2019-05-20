import React from 'react';

// components
import PassArrayAsProps from './arraryAsProps';
import DefaultProps from './defaultProps';
import AccessProps from './accessProps';

// material-ui
import Divider from '@material-ui/core/Divider';

// styles
import '../App.css';
 
 // statelss function and is a child component to calender
const CurrentDate = (props) => {
    return (
        <div className="answer">
            <p>The current date is : {props.date} </p>
        </div>
    );
};

class Calender extends React.Component {
    render () {
        return (
            <div className="page">
                <h1>Props</h1>
                <p>
                    Pass in a property of date assigned to the current date from 
                    JavaScript's Date object. Then access this prop in the CurrentDate 
                    component, showing its value within the p tags.
                </p>
                
                <div className="ans">
                    <h2>What date is it?</h2>

                    <CurrentDate date={Date()}/>    
                </div>

                <Divider />

                <div className="ans">
                    <PassArrayAsProps />
                </div>

                <Divider />
                
                <div  className="ans">
                    <DefaultProps />
                </div>

                <Divider />
                <div className="ans">
                    <AccessProps />
                </div>
            </div>
        );
    }
}

export default Calender;