import React, { Component } from 'react';

export default class CartComponent extends Component {

    render() {
        return (
            <div style={styles.cartContainerStyle}></div>
        )
    }
}

const styles = {
    cartContainerStyle: {
        backgroundColor: '#2980b9',
        width: '200px',
        height: '250px'
    }
}
