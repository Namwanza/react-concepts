import React from 'react';

const inputStyle = {
    width: 355,
    margin: 5,
    height: 80,
    border: '2px solid blue',
    borderRadius: 10,
}

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* change code below this line */ }
          <GetInput input={this.props.inputValue} handleChange={this.handleChange.bind(this)}/>
  
          <RenderInput input={this.state.inputValue} />
          { /* change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    render() {
      return (
        <div>
            <h1>React: Pass a Callback as Props</h1>
          <h3>Get Input:</h3>
          <input
            style={inputStyle}
            placeholder="Enter your text here!"
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
};
  
class RenderInput extends React.Component {
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
}
export default MyApp;