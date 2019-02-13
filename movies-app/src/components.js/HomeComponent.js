import React, { Component } from 'react';
import { getUpcomingMovies, imageAPI } from '../apis';
import BannerComponent from './BannerComponent';
import MovieListingComponent from './MovieListingComponent';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upcomingMovies: {}
    }
  }

  componentDidMount() {
    getUpcomingMovies("IN").then((movies) => {
      this.setState({ upcomingMovies: movies });
    });
  }

  renderBanner() {
    const { upcomingMovies } = this.state;
    const bannerList = upcomingMovies.results.map((result) => {
      return {
        url: imageAPI(result.poster_path, 500),
        title: result.title
      }
    });

    return <BannerComponent imageData={bannerList} />
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
      }}>
        {
          this.state.upcomingMovies.results &&
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            height: '100%',
            background: '#2980b9',
          }}>
            {/* {this.renderBanner()} */}
            <div
              style={{
                height: '30%',
                background: '#ecf0f1',
                borderRadius: '5px'
              }}
            ></div>
            <div
              style={{
                marginTop: '16px',
                overflow: 'auto',
                flex: 1,
                paddingBottom: '16px'
              }}
            >
              <MovieListingComponent />
            </div>
          </div>
        }
      </div>
    )
  }
}