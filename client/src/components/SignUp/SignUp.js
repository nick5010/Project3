import React from "react";
import Axios from "axios";


class SignUp extends React.Component {
    state = {
        // firstName: "",
        // lastName: "",
        userName: "",
        password: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.userName);
        console.log(this.state.password);
    }
    handleSubmit = event => {
        event.preventDefault();

        const data = {
            userName: this.state.userName,
            password: this.state.password
        };

        Axios.post(
            "./login"
        ).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })


    }


    // handleInputChange = event => {
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (!this.state.firstName || !this.state.lastName) {
    //         alert("Please enter a first and last name.")
    //     } else if (this.state.password.length < 6) {
    //         alert(`Please choose a more secure password ${this.state.firstName}${this.state.lastName}`);
    //     } else {
    //         alert(`Hello ${this.state.firstName}${this.state.lastName}`)
    //     }
    // }


    render() {
        return (
            <div>

                <h2>Comet</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userName" placeholder="UserName" onChange={this.handleInputChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default SignUp;