import React from 'react';

export default ({ imageUrl, title, rating }) => {
    return (
        <div style={styles.rootStyle}>
            <img src={imageUrl} style={styles.imageStyle} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1
            }}>
                <p style={styles.titleStyle}>{title}</p>
                <p style={styles.ratingStyle}>{rating}</p>
            </div>
        </div>
    );
}

const styles = {
    rootStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: '5px',
        height: '150px',
        boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.19)',
        margin: '16px'
    },

    imageStyle: {
        width: '20%',
        height: '100%',
        padding: '16px'
    },

    titleStyle: {
        fontWeight: 'bold',
        fontSize: '32px',
        fontColor: '#000',
        margin: '8px',
        textAlign: 'left'
    },

    ratingStyle: {
        width: '50px',
        padding: '8px',
        fontSize: '18px',
        color: '#fff',
        margin: '8px',
        backgroundColor: '#2c3e50',
        borderRadius: '5px',
        textAlign: 'center'
    }
}