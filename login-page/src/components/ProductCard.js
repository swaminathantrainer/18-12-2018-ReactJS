import React from 'react';
import './ProductCard.css';

export default ({ img, title, starCount, reviews, rate, onCartChangedCallback }) => {
    return (
        <div style={styles.cardStyle}>
            <div style={styles.contentContainer}>
                <img src={img} alt={title} style={styles.imageStyle} />
            </div>

            <div style={styles.contentContainer}>
                <p>{title}</p>
            </div>

            <div style={styles.contentContainer}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <div></div>
                    <p style={styles.titleStyle}>{`${reviews} Reviews`}</p>
                </div>
            </div>

            <div style={styles.contentContainer}>
                <p style={styles.titleStyle}>{`${rate} $`}</p>
            </div>

            <div style={styles.contentContainer}>
                <button style={styles.buttonStyle} onClick={onCartChangedCallback}>Add To Cart</button>
            </div>
        </div>
    )
};

const styles = {
    cardStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
        padding: '4px'
    },

    imageStyle: {
        width: '100%',
        height: '40%',
    },

    titleStyle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: '14px',
    },

    contentContainer: {
        marginTop: '12px'
    },

    buttonStyle: {
        backgroundColor: '#2980b9',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: '14px',
        padding: '4px'
    }
}