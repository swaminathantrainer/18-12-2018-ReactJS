import React from 'react';
import InputComponent from './InputComponent';

class LoginComponent extends React.Component {

    render() {
        return (
            <div style={styles.rootContainer}>
                <div style={styles.loginCardContainer}>
                    <p style={{
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>Welcome back</p>
                    <p style={styles.lightTextStyle}>Sign in to your account</p>
                    <InputComponent icon="https://img.icons8.com/color/30/d3d3d3/secured-letter.png" />
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
                    <div></div>
                </div>
            </div>
        );
    }
}

const styles = {
    rootContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgray'
    },

    loginCardContainer: {
        backgroundColor: 'white',
        width: '75%',
        height: '75%',
        border: '1px solid darkgrey',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        padding: '50px'
    },

    lightTextStyle: {
        color: '#A9A9A9',
        fontSize: '16px'
    }
}

export default LoginComponent;

{/* <html></html>
<title /> */}