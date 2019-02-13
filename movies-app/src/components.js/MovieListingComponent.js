import React from 'react';
import { getTrendingData, imageAPI } from '../apis';
import MovieCard from './MovieCard';

export default class MovieListingComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      trendingMovies: [],
      currentPage: 1,
      totalPages: 0,
    }
  }

  componentDidMount() {
    this.getData(this.state.currentPage);
  }

  getData(page) {
    this.setState({ loading: true });
    getTrendingData("movie", "week", page).then((movies) => {
      let moviesList = this.state.trendingMovies.slice();
      moviesList = moviesList.concat(movies.results);
      this.setState({ trendingMovies: moviesList });
      this.setState({ totalPages: movies.total_pages });
      this.setState({ loading: false });
    });
  }

  loadMoreData() {
    // 1. Increment the current page
    // 2. Check if this page number is valid
    // 3. Fetch the data for that page

    const nextPage = this.state.currentPage + 1;

    if (nextPage <= this.state.totalPages) {
      this.setState({ currentPage: nextPage });
      this.getData(nextPage);
    }
  }

  render() {
    return (
      <div style={{ padding: '16px' }}>
        {
          this.state.totalPages &&
          this.state.trendingMovies.map((trending) => {
            return (
              <MovieCard
                imageUrl={imageAPI(trending.poster_path, 200)}
                title={trending.title}
                rating={trending.vote_average}
              />
            );
          })
        }
        <button style={styles.loadMoreButtonStyle} onClick={() => {
          this.loadMoreData();
        }}>LOAD MORE</button>
      </div>
    );
  }
}

const styles = {
  loadMoreButtonStyle: {
    background: '#f1c40f',
    borderRadius: '5px',
    padding: '8px',
    float: 'right'
  }
}