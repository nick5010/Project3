import React from "react";

class Login extends React.Component {
    state = {
        userName: "",
        password: ""
    }

    // handleInputChange = event => {
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.userName || !this.state.userName) {
            alert("Please enter both a username and password to log in.")
        }
    }

    render() {
        return (
                <div class="row">
                    <div class="col s12">
                        <div class="row">
                            <h2 id="loginHeader" class="col s12 center-align">Comet</h2>
                        </div>
                    </div>
                    <div class="col s1"></div>
                    <div class="col s10">
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="Username" id="usernameInput" type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} class="validate" />
                                <label for="usernameInput">Username</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="Password" id="passwordInput" type="text" name="password" value={this.state.password} onChange={this.handleInputChange} class="validate" />
                                <label for="passwordInput">Password</label>
                            </div>
                        </div>
                    </div>
                    <div class="col s1">
                    </div>
                    <div class="col s12">
                        <div class="row">
                            <div class="col s6 center-align">
                                <button class="btn waves-effect waves-light" id="loginBttn" type="submit" onClick={this.handleFormSubmit} name="action">Log In
                            <i class="material-icons right">send</i>
                                </button>
                            </div>
                            <div class="col s6 center-align">
                                <button class="btn waves-effect waves-light" id="signUpBttn" type="submit" name="action">Sign
                                    Up
                        </button>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default Login;