import React, { Component } from 'react';
import LogoComponent from './LogoComponent';
import NavBarComponent from './NavBarComponent';
import BannerComponent from './BannerComponent';
import CartComponent from './CartComponent';
import ListComponent from './ListComponent';
import { ProductData } from '../sample';
import ProductCard from './ProductCard';

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
                <div style={{
                    backgroundColor: '#f1c40f',
                    width: '100%',
                    height: '70px',
                    marginTop: '8px',
                    marginBottom: '8px'
                }} />
                <ListComponent
                    data={ProductData}
                    renderElement={(element) => {
                        return (
                            <ProductCard
                                img={element.image}
                                title={element.title}
                                rate={element.rate}
                                starCount={element.starCount}
                                reviews={element.reviews}
                            />
                        )
                    }}
                />
            </div>
        )
    }
}

const styles = {
    rootContainerStyle: {
        'width': '100%',
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