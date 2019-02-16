import React, { Component } from 'react';
import { movieAPI, imageAPI } from '../apis';
import Media from 'react-media';

export default class MovieDetailsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        }
    }


    componentDidMount() {
        movieAPI(this.props.match.params.movieId).then((movie) => {
            this.setState({ movie });
        });
    }

    renderLargeDevices() {
        const { movie } = this.state;

        return (
            <div style={styles.rootStyle}>
                <img style={styles.imageStyle} src={imageAPI(movie.poster_path, '500')}></img>
                <div style={styles.topContainerStyle}>
                    <div style={{
                        width: '60%',
                        float: 'right'
                    }}>
                        <p style={styles.titleStyle}>{movie.title}</p>
                        <p style={styles.descriptionStyle}>{
                            `Runtime: ${movie.runtime}, Vote Average: ${movie.vote_average}, Language: ${movie.original_language}`
                        }</p>
                    </div>
                </div>
                <div style={styles.bottomContainerStyle}>
                    <p style={styles.overviewStyle}>{movie.overview}</p>
                </div>
            </div>
        )
    }

    renderSmallDevices() {
        const { movie } = this.state;

        return (
            <div style={styles.rootStyle}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img style={{
                        width: '250px',
                        height: '60%',
                    }} src={imageAPI(movie.poster_path, '500')}></img>
                </div>
                <div style={styles.topContainerStyle}>
                    <div style={{
                        width: '100%'
                    }}>
                        <p style={styles.titleStyle}>{movie.title}</p>
                        <p style={styles.descriptionStyle}>{
                            `Runtime: ${movie.runtime}, Vote Average: ${movie.vote_average}, Language: ${movie.original_language}`
                        }</p>
                    </div>
                </div>
                <div style={styles.bottomContainerStyle}>
                    <p style={{
                        fontSize: '18px',
                        margin: '8px',
                        width: '100%'
                    }}>{movie.overview}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Media query="(max-width: 600px)">
                {matches => matches ? this.renderSmallDevices() : this.renderLargeDevices()}
            </Media>
        );
    }
}

const styles = {
    rootStyle: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        textAlign: 'left',
        overflow: 'auto'
    },

    topContainerStyle: {
        backgroundColor: '#000',
        color: '#fff',
        height: '50%'
    },

    bottomContainerStyle: {
        backgroundColor: '#fff',
        color: '#000',
        height: '50%'
    },

    imageStyle: {
        position: 'relative',
        margin: '16px',
        width: '30%',
        height: '60%',
        float: 'left',
        backgroundColor: '#2ecc71'
    },

    titleStyle: {
        fontWeight: 'bold',
        fontSize: '32px'
    },

    overviewStyle: {
        fontSize: '18px',
        margin: '8px',
        width: '60%',
        float: 'right'
    },

    descriptionStyle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: '18px',
        marginTop: '8px'
    }
}