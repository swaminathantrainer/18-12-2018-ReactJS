import React from 'react';

class LoginComponent extends React.Component {

    render() {
        return (
            <div style={styles.rootContainer}>
                <div style={styles.loginCardContainer}>
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
        margin: 'auto'
    }
}

export default LoginComponent;

{/* <html></html>
<title /> */}