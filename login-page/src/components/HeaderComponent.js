import React from 'react';

export default () => {

    return(
        <div style={styles.headerContainer}>
            <h1 style={styles.logoStyle}>SHOP</h1>
            <img src="https://img.icons8.com/color/48/000000/twitter.png"/>
            <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
            <img src="https://img.icons8.com/color/48/000000/instagram-new.png"/>
            <img src="https://img.icons8.com/color/48/000000/pinterest.png"/>
        </div>
    )
}

const styles = {
    headerContainer: {
        display: 'flex',
        padding: '8px',
        flexDirection: 'row',
        alignItems: 'center',
        height: '70px'
    },
    
    logoStyle: {
        color: 'blue',
        fontSize: '40px',
        margin: '8px',
        flex: 1
    }
}