import React from 'react';

// styles
import '../App.css'

class ReturnTempPassword extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Your temporary password is:
                </p>

                <strong>{this.props.tempPassword}</strong>
            </div>
        )
    }
}


class ResetPassword extends React.Component {
    render () {
        return(
            <div>
                <h1>React: Access Props Using this.props</h1>

                <p>Anytime you refer to a class component within itself, you use the this keyword. To access props within a class component, you preface the code that you use to access it with this. For example, if an ES6 class component has a prop called data, you write {this.props.data}in JSX.</p>
                <h2>Reset Password</h2>
                <h3>We've generated a new temporary password for you.</h3>
                <h3>Please reset this password from your account settings ASAP</h3>

                <ReturnTempPassword tempPassword={'ronald123'}/>
            </div>
        )
    }
}

export default ResetPassword;