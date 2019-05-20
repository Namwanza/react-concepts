// In this component you will learn how to pass array list as props
import React from 'react';

// styles
import '../App.css';

const List = (props) => {
    return (
        <p>{props.tasks.join(',' )}</p>
    );
}


class ToDo extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    React: Pass an Array as Props 
                </h1>

                <p>
                    There are List and ToDo components in the code editor. When rendering each Listfrom the ToDo component, 
                    pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. 
                    Then access this tasks array in the List component, showing its value within the p element. Use join(", ")
                    to display the props.tasks array in the p element as a comma separated list. Today's list should have at 
                    least 2 tasks and tomorrow's should have at least 3 tasks. 
                </p>

                <div className="answer">
                    <h2>To Do Lists</h2>
                    <h3>Today</h3>

                    <List tasks = {["Ronald", "Namwanza"]} />

                    <h2>Tomorrow</h2>
                    <List tasks = {["Ronnie", "Ronald", "Namwanza"]} />
                </div>
            </div>
        );
    }
}

export default ToDo;