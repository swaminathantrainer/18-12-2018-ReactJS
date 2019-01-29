import React, { Component } from 'react';
import LogoComponent from './LogoComponent';
import NavBarComponent from './NavBarComponent';
import BannerComponent from './BannerComponent';
import CartComponent from './CartComponent';

class HomeComponent extends Component {

    render() {
        return (
            <div style={styles.rootContainerStyle}>
                <div style={{
                    marginTop: '10px',
                    marginBottom: '10px'
                }}>
                    <NavBarComponent />
                </div>
                <div style={styles.centerLayoutStyle}>
                    <div style={{
                        flex: 1,
                        height: '100%',
                        marginRight: '15px'
                    }}>
                        <BannerComponent />
                    </div>
                    <CartComponent />
                    <div />
                </div>
                <div />
                <div />
            </div>
        )
    }
}

const styles = {
    rootContainerStyle: {
        position: 'fixed',
        'left': 0,
        'right': 0,
        'width': '90%',
        'height': '100%',
        margin: 'auto'
    },

    centerLayoutStyle: {
        height: '300px',
        display: 'flex',
        flexDirection: 'row'
    }
}

export default HomeComponent;