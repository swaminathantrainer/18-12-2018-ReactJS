import React from 'react';
import InputComponent from './InputComponent';
import { __asyncValues } from 'tslib';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            errorMessage: ''
        }
    }

    validateEmail() {
        const email = this.state.email;

        if (email) {
            const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return emailRegex.test(email);
        } else {
            return false;
        }
    }

    render() {
        return (
            <div style={styles.rootContainer}>
                <div style={styles.loginCardContainer}>
                    <p style={{
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>Welcome back</p>
                    <p style={styles.lightTextStyle}>Sign in to your account</p>
                    <InputComponent
                        icon="https://img.icons8.com/color/30/d3d3d3/secured-letter.png"
                        onInputChanged={(value) => {
                            this.setState({
                                email: value
                            });
                        }}
                    />
                    <InputComponent icon="https://img.icons8.com/ios-glyphs/30/d3d3d3/lock.png" />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: '50px',
                        marginTop: '15px'
                    }}>
                        <div style={{ flex: 1 }}>
                            <input type="checkbox" name="rememberMe"
                                style={{ marginRight: '8px' }} />
                            <label style={styles.lightTextStyle}>Remeber me</label>
                        </div>
                        <p
                            style={{
                                display: 'inline',
                                color: 'green'
                            }}

                            onClick={() => {
                                console.log("Clicked!!!");
                            }}
                        >
                            Forgot your password?
                        </p>
                    </div>
                    <button style={styles.buttonStyle} onClick={() => {
                        if (this.validateEmail()) {
                            this.setState({
                                errorMessage: ""
                            });
                        } else {
                            this.setState({
                                errorMessage: "Enter a valid email"
                            });
                        }
                    }}>LOGIN</button>
                    <p style={styles.errorTextStyle}>{this.state.errorMessage}</p>
                </div>
            </div>
        );
    }
}

const styles = {
    rootContainer: {
        height: '100%',
        backgroundColor: 'lightgray'
    },

    loginCardContainer: {
        backgroundColor: 'white',
        width: '60%',
        height: '350px',
        border: '1px solid darkgrey',
        position: 'relative',
        top: '50px',
        left: 0,
        right: 0,
        margin: 'auto',
        padding: '50px'
    },

    lightTextStyle: {
        color: '#A9A9A9',
        fontSize: '16px'
    },

    buttonStyle: {
        width: '100%',
        height: '50px',
        backgroundColor: '#e67e22',
        color: '#FFF',
        fontWeight: 'bold',
        borderRadius: '5px',
    },

    errorTextStyle: {
        margin: '8px',
        color: '#e74c3c',
        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: 'center'
    }
}

export default LoginComponent;

{/* <html></html>
<title /> */}